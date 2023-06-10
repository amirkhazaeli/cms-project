import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

export default function Modal({ children,DeleteModaClose, EditModalClose,CommentModalClose,RemoveCommentModalClose,EditCommentModalClose,ReplayCommentModalClose }) {
  console.log("test");
  useEffect(() => {
    const eventHandler = (e) => {
      if (e.target.className === 'modal') {
       if(EditModalClose){ // EditModal Close Handler
          EditModalClose()
        }else if(DeleteModaClose){// DeleteModal Close Handler
          DeleteModaClose()
        }else if(CommentModalClose){// DeleteModal Close Handler
          CommentModalClose()
        }else if(RemoveCommentModalClose){// RemoveCommentModal Close Handler
          RemoveCommentModalClose()
        }else if(EditCommentModalClose){// EditCommentModal Close Handler
          EditCommentModalClose()
        }else if(ReplayCommentModalClose){// ReplayCommentModal Close Handler
          ReplayCommentModalClose()
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
