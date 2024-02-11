import React from 'react'
import './account.css'
import Ellipse from '../../assets/Ellipse 114/Ellipse 114.png'
import Group from '../../assets/Group 1585/Group 1585.png'

const Account = () => {
  return (
    <div className='account'>
        <div className='account-sec-1'>
            <h1>Account Settings</h1>
        </div>
        <div className='account-sec-2'>
            <div className='account-sec-img-1'>
                <img src={Ellipse} alt="" />
                <div className='account-sec-img-2'>
                    <img src={Group} alt="" />
                </div>
            </div>
            <div className='account-sec-contact'>
                <h1>Marry Doe</h1>
                <p>Marry@Gmail.Com</p>
            </div>
        </div>
        <div className='account-sec-3'>
            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
        <div className='account-sec-4'>
        <hr />
        <hr />    
        </div>
    </div>
  )
}

export default Account
