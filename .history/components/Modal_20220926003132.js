import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
    const [open, setOpen] = useRecoilState(modalState);
    
    
  return (
    <Transition appear  show={open} as={Fragment}>
      <Dialog  as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <div  className='flex items-end justify-center min-h-[800px] text-center sm:min-h-screen pt-4 px-4 pb-20 '  >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          < Dialog.Overlay    className="fixed inset-0 bg-black-50 transition-opacity  "  />
        </Transition.Child>
        <span className='inline-block h-screen align-middle'  aria-hidden="true"  >
          &#8203;

        </span>
        
            
        

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          
        >
          
          <div className='inline-block w-full overflow-hidden'   >
            <Dialog.Title as="h3"   > 
              hello
              hhhhhh
              jjjjj

            </Dialog.Title>
            <div>
              <p>hello world</p>
            </div>

            {/* ... */}
          </div>
        </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
 


   
  


export default Modal