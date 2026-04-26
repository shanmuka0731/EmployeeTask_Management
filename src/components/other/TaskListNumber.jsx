import React from 'react'

const TaskListNumber = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between  gap-5 screen'>
        <div className='rounded-xl w-[45%] px-9 py-6  bg-[#495057]'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6  bg-[#A07178]'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6  bg-[#776274]'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-9 py-6  bg-[#a3b18a]'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
        
    </div>
  )
}

export default TaskListNumber