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
                <div className="items-centre max-auto justify-center cursor-pointer flex "   >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600 ">
                  <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                  <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>

                </div>
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
                    <input className="text-center border-none focus:ring-0"   type="text" placeholder='Comment...' />
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