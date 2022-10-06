import {  signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';





function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const router = useRouter()
  console.log(session); 
  return (
    <div className='shadow-sm border-b sticky top-0 z-50 bg-red-500'  >
     
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto items-centre " >
        
        <div  onClick={() => router.push("/")} className="relative hidden  w-20 h-20 lg:inline-grid cursor-pointer rounded-md  ">
          <Image 

            src="https://image.shutterstock.com/image-photo/word-link-serious-businessman-hands-600w-180015809.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        
        
       

        <div className="flex items-center cursor-pointer space-x-2 border  h-9 mt-6 pl-3 sm:text-small rounded-md">
          <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input className='focus:border-black' type="text" placeholder='Search...' />  
        </div>
        <div className='flex space-x-4 items-center justify-end'>
          <svg className='navBtn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="navBtn">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="navBtn">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          
          
          {session ? (
            <>
              
              <svg onClick={() => setIsOpen(true)}   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 cursor-pointer ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              


              <img onClick={signOut}   className='w-12 h-12 rounded-full border object-contain' src={session.user?.image} />
            </>
            
          
          ):(
            <button onClick={signIn} >Sign In </button>
          )}
          

        </div>
      </div>

    </div>
  )
}

export default Header