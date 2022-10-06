import React from 'react'

function Story({ id, username, userImg }) {
  return (
    <div className=''>
        <img className='w-14 h-14 rounded-full border-red-500 object-cover cursor-pointer'  src={userImg} alt="" />
        <h3 className='text-xs w-14 text-center'   >{username}</h3>
    </div>
  )
}

export default Story