import React from 'react'
import Down from './Down'
import Mimi from './Mimi'
import Posts from './Posts'
import Stories from './Stories'

function Feed() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'  >
        <div className='col-span-2' >
            <Stories />
            <Posts/>
        </div>
        <div className='hidden md:col-span-1 xl:inline-grid' >
          <div>
            <Mimi/>
            <Down/>
          </div>
        </div>
    </div>
  )
}

export default Feed