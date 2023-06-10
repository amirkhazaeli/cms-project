import React from 'react'
import svgImage from '../../Assets/images/profile/images.svg'
import './WelcomeBox.css'
import { BsArrowLeftShort } from 'react-icons/bs'
export default function WelcomeBox() {
    return (
        <div className='Welcome-Box'>
            <div className='right-section'>
                <h1>سلام</h1>
                <h3>خوش آمدید ، داشبورد شما اماده است!</h3>
                <button>
                    شروع کنید
                    <BsArrowLeftShort />
                </button>
            </div>
            <img src={svgImage} alt="Profile" />
        </div>
    )
}
