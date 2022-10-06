import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
    const [open, setOpen] = useRecoilState(modalState);
    
    
  return (
  <Transition.Root show={true} as={Fragment}>
    <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
      

     <div className="flex items-end  border justify-centre min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-centre   "   >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black-500 transition-opacity    " />
      </Transition.Child>
      <span className='inline-block align-middle'   > &F3283</span>

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
        <div  className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden
             '  >
            <h1>heloo</h1>
            
        </div>
      </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>
)
}
   
  


export default Modal