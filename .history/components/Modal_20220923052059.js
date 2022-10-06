import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Modal() {
    const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
      <h2>hi</h2>
      {open &&  (     
        <p>modal open</p>
     )} 
    </div>
   
  )
}

export default Modal