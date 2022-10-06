import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { db } from '../firebase';
import Post from './Post'

const posts = [
  
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), snapshot => {
      setPosts(snapshot.docs)
    })

  }, [db])
  console.log(posts);
  return (
    <div>
      
        {post.map((post) => (
          
            <Post
              key={post.id}
              id={post.id}
              userImg={post.profileImg}
              username={post.username}
              img={post.img}
              caption={post.caption}
            />
        ))} 
    </div>
  )
}

export default Posts