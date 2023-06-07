import React from 'react'
import './ErrorBox.css'
export default function ErrorBox({msg}) {
  return (
    <div className='cms-error-box'>
        {
            msg
        }
    </div>
  )
}
