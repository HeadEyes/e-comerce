import React from 'react'
import "./Contact.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export const Contact = () => {
    return (
        <main className='main-contact'>
            <div className='contact-container'>
                <h2 className='contact-title'>Contact us</h2>
                <ul className='contact__list'>
                    <li className='contact__list-item'>
                        <LocalPhoneIcon />
                        (123) 456-7890
                    </li>
                    <li className='contact__list-item'>
                        <LocalPhoneIcon />
                        (123) 456-7890
                    </li>
                    <li className='contact__list-item'>
                        <EmailIcon />
                        fakeStore@ecomerce.com
                    </li>
                </ul>
            </div>

            <span className='contact-slice'>

            </span>

            <div className='contact-form'>
                <form className='form' method='POST' action="https://getform.io/f/104e8a8c-3809-49ce-ae97-b0e1b028a120">
                    <label className='form-label' htmlFor="form-name">Name</label>
                    <input className='form-name form-input' type="text" placeholder='Name' name='name' required/>
                    <label className='form-label' htmlFor="fotrm-email">E-mail</label>
                    <input className='form-email form-input' type="email" placeholder='Email' name='email' required/>
                    <label className='form-label' htmlFor="form-message">Message</label>
                    <textarea className='form-message form-input' rows="10" name="message" placeholder='Message' required></textarea>
                    <button className='form-button' >Send message</button>
                </form>
            </div>
        </main>
    )
}
