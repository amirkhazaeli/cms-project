import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

export default function Modal({ children,DeleteModaClose, EditModalClose,CommentModalClose,RemoveCommentModalClose,EditCommentModalClose }) {
  console.log("test");
  useEffect(() => {
    const eventHandler = (e) => {
      if (e.target.className === 'modal') {
       if(EditModalClose){ // EditModal Close Handler
          EditModalClose()
        }else if(DeleteModaClose){// DeleteModal Close Handler
          DeleteModaClose()
        }else if(CommentModalClose){
          CommentModalClose()
        }else if(RemoveCommentModalClose){
          RemoveCommentModalClose()
        }else if(EditCommentModalClose){
          EditCommentModalClose()
        }
      }

    }
    window.addEventListener('click', eventHandler)
    return () => {
      window.removeEventListener('keydown', eventHandler)
      window.removeEventListener('click', eventHandler)
    }
  }, [])
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
