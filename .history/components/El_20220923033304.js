
import React from 'react'

function El({ id, username, userImg }) {
  return (
    
    
    <div >
        <div className='flex mt-4 p-3 justify-between '  >
            <div className='flex' >
                <img className='w-14 h-14 rounded-full border '   src={userImg} alt="" />
                <div className='ml-2 font-light '  >
                    
                    <h3 className='font-bold'  >{username}</h3>
                    <h5  className='text-sm'  >People you may know</h5>
                </div>
            </div>
            <h3 className='font-bold text-blue-500' >Follow</h3>
        </div>
    </div>
    
  )
}

export default El