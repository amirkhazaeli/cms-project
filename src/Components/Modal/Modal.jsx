import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

export default function Modal({children, unHide }) {

  useEffect(()=>{
   const eventHandler = () =>{
     unHide()
   }
   window.addEventListener('keydown', eventHandler)

   return () => {
    window.removeEventListener('keydown', eventHandler)
   }
  },[])
    return ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-content">
          {children }
          </div>
        </div>,
        document.getElementById('modal-root')
      );
}
