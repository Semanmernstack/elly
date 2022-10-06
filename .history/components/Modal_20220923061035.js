import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal() {
    const [open, setOpen] = useRecoilState(modalState)
    
  return (
    <Transition show={open} as={Fragment}>
    <Dialog  className="fixed z-10 inset-0 overflow-y-auto"   onClose={setOpen}
      {/*
        Use one Transition.Child to apply one transition to the backdrop...
      */}
     <div classeName="flex items-end justify-centre min-h-[900px] sm:min-h-screen pt-4 px-4 pb-20 text-centre   "   >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/30" />
      </Transition.Child>

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
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>

          {/* ... */}
        </Dialog.Panel>
      </Transition.Child>
      </div>
    </Dialog>
  </Transition>
)
}
   
  


export default Modal