import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export default function Modal({ children , modalClose,isshowErrorAlertBox }) {
  useEffect(() => {
    const eventHandler = (e) => {
      if (e.target.className === 'modal') {
        modalClose()
      }
    }
    window.addEventListener('click', eventHandler)
    return () => {
      window.removeEventListener('click', eventHandler)
    }
  }, [])

  
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
      {
        isshowErrorAlertBox ? (
          <div className='modal-alert'>
          <Alert severity="error">
            <AlertTitle>خطا</AlertTitle>
            مقدار را وارد کنید
          </Alert>
        </div>
        ) : null
      }
    </div>,
    document.getElementById('modal-root')
  );
}
