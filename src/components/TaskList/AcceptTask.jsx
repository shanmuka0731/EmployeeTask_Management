import React from 'react'

const AcceptTask = ({data}) => {
  return (
     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#A07178] rounded-xl'>
            <div className='flex justify-between iems center '>
              <h3 className='bg-red-600 text-sm px-3 py-1'>{data.category}</h3>
              <h4>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-bold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 px-2 py-1 text-sm'>Mark as completed</button>
                    <button className='bg-red-500 px-2 py-1 text-sm'>Mark as failed</button>
            </div>
    </div>

)
}

export default AcceptTask