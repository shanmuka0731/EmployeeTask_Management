import React, { useState } from 'react'

const Header = ({ data, changeUser }) => {

  // const [username, setUsername] =useState('')
  // if(!data){
  //   setUsername('admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }
  const logOutUser =()=>{
    localStorage.removeItem('loggedInUser')
    changeUser(null) 
    //console.log(props.changeUser);
    //window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold '>Hello<br/><span className='text-3xl font-semibold'>{data?.firstName || 'admin'} 😁</span></h1>
        <button onClick={logOutUser} className='bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-md'> Log Out</button>
    </div>
  )
}

export default Header