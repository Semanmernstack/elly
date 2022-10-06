import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
    
    
  return (
    
    <Transition  show={isOpen} as={Fragment}  >
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
            text-left overflow-hidden shadow-xl transition-all sm:my-0 sm:align-middle sm:max-w-sm sm:w-full sm: p-6" >
              <div>
                <div className="mt-4 text-center sm:mt-6"   >
                  <Dialog.Title as="h3" className="text-lg text-gray-500 font-medium leading-6"  >
                    Upload Your Photo
                  </Dialog.Title>
                  <div>
                    <input type="file"
                      hidden
                     />

                  </div>
                  <div className='mt-3 mb-3'  >
                    <input className="text-center border-none"   type="text" placeholder='Comment...' />
                  </div>
                </div>
                <div>
                  <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border-transparent shadow-sm 
                  px-4 bg-red-500 font-medium text-white cursor-pointer  "
                  >
                    Upload Post
                  </button>
                </div>
              </div>

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
 


   
  


export default Modal