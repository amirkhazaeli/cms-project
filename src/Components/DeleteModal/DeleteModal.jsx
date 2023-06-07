import React from 'react'
import ReactDOM from 'react-dom';
import './DeleteModal.css'

export default function DeleteModal({cancelAction,submitAction}) {
    return ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-content">
            <h1 className='modal-title'>ایا از حذف اطمینان داری؟</h1>
            <button onClick={()=> submitAction()} >بله</button>
            <button onClick={()=> cancelAction()}>خیر</button>
          </div>
        </div>,
        document.getElementById('modal-root')
      );
}
