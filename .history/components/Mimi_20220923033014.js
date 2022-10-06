import { useSession } from 'next-auth/react';
import React from 'react'

function Mimi() {
  const { data: session } = useSession();
  return (
    <div className='flex justify-between items-center mt-10 p-2 border bg-white ml-1'  >
        <div className='flex space-x-4 items-center '   >
            <img className='w-14 h-14  rounded-full border '  src={session.user.image} alt="" />
            <h3>{session.user.name}</h3>
        </div>
        <div>
            <h3 className='font-bold text-blue-500' onClick={signOut}></h3>
        </div>
    </div>
  )
}

export default Mimi