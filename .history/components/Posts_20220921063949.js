import React from 'react'
import Post from './Post'

const post = [
    {
        id:"1",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi abe",
        img:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        caption:"hello world",

      },
      {
        id:"2",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi lad",
        img:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        caption:"need you always",
      },
      {
        id:"3",
        userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        username:"seyi gold",
        img:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
        caption:"what a wonderful day to be with you guys",
      },
]

function Posts() {
  return (
    <div>
        {post.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              userImg={post.userImg}
              username={post.username}
              img={post.img}
              caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts