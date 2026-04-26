import React,{useContext, useEffect,useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider.jsx'
import { getLocalStorage, setLocalStorage } from './components/utils/localStorage.jsx'
const App = () => {

  const [user,setUser]=useState(null)
  const[loggedInUserData,setLoggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
    try {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data || null)
    } catch (err) {
      console.error("Invalid JSON")
      localStorage.removeItem('loggedInUser')
    }
  }
    //   setUser(userData.role)
    //   setLoggedInUserData(userData.data)
    // }
  }, [])

  

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    }
    else if(userData){
      const employee = userData.find((e) =>  email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee) 
         localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
      }
    }
    else{
      alert("invalid credentials")
    }
  }

  return (
    <>
   {!user ? <Login handleLogin={handleLogin}/>:null}
   {user=='admin' ? <AdminDashboard changeUser={setUser} />: (user == 'employee' ?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>: null)}
   {/*<EmployeeDashboard /> */}
   {/*<AdminDashboard/> */}
    </>
  )
}

export default App