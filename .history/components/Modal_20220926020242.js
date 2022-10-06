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
        
        <h2>hello</h2>
      </Dialog>
    </Transition>
  )
}
 


   
  


export default Modal