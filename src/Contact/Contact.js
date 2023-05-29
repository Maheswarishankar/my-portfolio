import React from 'react'
import '../Contact/Contact.css'

const Contact = () => {
  return (

    <div className="contact-page">
      <h1 className="animate__animated  animate__bounce  home-content">
        Contact Me
      </h1>
      <div className="contact-form">
        <form>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>
      <br />
      <div className="footer-contact"><br />
        <p>&#169; Maheshwari. All right reserved</p>
      </div>
    </div>

  )
}

export default Contact