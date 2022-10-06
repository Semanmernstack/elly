import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
    
    
  return (
    
    <Transition  show={open} as={Fragment}  >
      <Dialog
        
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setIsOpen}

        
      >
        
        <div className='flex  items-end justify-center min-h-[800px] pt-4 px-4 pb-20 text-center'   >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle" 
            aria-hidden="true"
          >  
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5
            text-left overflow-hidden shadow-xl transition-all" >
              <p>hello</p>
              <p>hjjjjkk</p>

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
 


   
  


export default Modal