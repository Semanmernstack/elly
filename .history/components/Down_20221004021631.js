import React from 'react'
import El from './El'

const down = [
    {
        id:"1",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi abe",
      },
      {
        id:"2",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi lad",
      },
      {
        id:"3",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi gold",
      },
      {
        id:"4",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi",
      },
      {
        id:"5",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi",
      },
      {
        id:"6",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi",
      },
]

function Down() {
  return (
    <div   >
        {down.map((el) => (
            
            <El
                key={el.id}
                id={el.id}
                userImg={el.userImg}
                username={el.username}
            />
            
        ))}
    </div>
  )
}

export default Down