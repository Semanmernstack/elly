
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
    username:"rofiat",
  },
  {
    id:"5",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"mustapha",
  },
  {
    id:"6",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"idan",
  },
  {
    id:"7",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"ewami",
  },
  {
    id:"8",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"doyin",
  },
  {
    id:"9",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"reba",
  },
  {
    id:"10",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"11",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"anita",
  },
  {
    id:"12",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"remo",
  },
  {
    id:"13",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"lola",
  },
  {
    id:"14",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"kunle",
  },
  {
    id:"15",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seyi",
  },
  {
    id:"16",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"sina",
  },
  {
    id:"17",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"sewa",
  },
  {
    id:"18",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"rita",
  },
  {
    id:"19",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"bola",
  },
  {
    id:"20",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"bayo",
  },
  {
    id:"21",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"remi",
  },
  {
    id:"22",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"sayo",
  },
  {
    id:"23",
    userImg:"https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg",
    username:"seau",
  },
]

function Stories() {
 
    

  return (
    <div className='flex space-x-2 mt-8 p-4 border border-gray-200 bg-white overflow-x-scroll'   >
        
      {stories.map((story) => (
        
        <Story
          key={story.id}
          id={story.id}
          userImg={story.userImg}
          username={story.username}
        />
        
      ))}
    </div>
  )
}

export default Stories