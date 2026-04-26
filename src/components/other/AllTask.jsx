import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData]= useContext(AuthContext)

    //console.log(authData.employees)
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-80 '>
        <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between'>
                    <h3 className='text-lg font-mediumw-1/5 '>Employee</h3>
                    <h2 className='text-lg font-mediumw-1/5 '>New Task</h2>
                    <h5 className='text-lg font-mediumw-1/5 pr-10'>Active</h5>
                    <h5 className='text-lg font-mediumw-1/5 pr-20'>Completed</h5>
                    <h5 className='text-lg font-mediumw-1/5'>Failed</h5>
                    <h5 className='text-lg font-mediumw-1/5'></h5>

        </div>
        <div className='h-48 overflow-auto '>
            {userData.map(function(elem,idx){
            return (
                <div key={idx}className='border-2 border-emerald-500 mb-2 py-2 px-4 flex'>
                    <h2 className='text-lg font-medium w-1/5 text-violet-600 '>{elem.firstName || 'admin'}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-yellow-600 '>{elem.taskNumbers.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5 text-blue-600 '>{elem.taskNumbers.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-green-600 '>{elem.taskNumbers.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-600 pl-16'>{elem.taskNumbers.failed}</h5>

                </div>
            )
        })}
        </div>
        

    </div>
  )
}

export default AllTask