import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import location_icon from '../../assets/location-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send Us a message <img src={msg_icon} alt="Message icon" /></h3>
        <p>Feel free to contact us through contact form or below given contacts </p>
        <ul>
          <li><img src={phone_icon} alt="" />+923430968584</li>
          <li><img src={mail_icon} alt=""/> muhammadanas.tech@gmail.com</li>
          <li><img src={location_icon} alt="" />235 East, London, UK </li>
        </ul> 
      </div>
      <div className="contact-col">
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="" placeholder='Enter your name' required />
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder='Enter email'/>
          <label htmlFor="">Message</label>
          <textarea name="message" id="" rows="10" placeholder='enter your message' ></textarea>
          <button type="submit" className='btn btn-dark'>Send message
          <img src={white_arrow} alt="" />
          </button>
        

        </form>
      </div>
    </div>
  )
}

export default Contact
