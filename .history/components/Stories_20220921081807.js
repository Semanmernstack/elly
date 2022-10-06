
import Story from './Story';

const stories = [
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
  {
    id:"7",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"8",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"9",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"10",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"11",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"12",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"13",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"14",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"15",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"16",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"10",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"11",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"12",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"13",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"14",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"15",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"16",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
]

function Stories() {
 
    

  return (
    <div className='flex space-x-2 mt-8 p-4 border border-gray-200 bg-white overflow-x-scroll'   >
        
      {stories.map((story) => (
        <div>
        <Story
          key={story.id}
          id={story.id}
          userImg={story.userImg}
          username={story.username}
        />
        </div>
      ))}
    </div>
  )
}

export default Stories