import React from 'react'
import './contact.css'

function Contact() {

 
  return (


    <section className="contact">

      <h1 className="title">Contact Me</h1>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>4026 anna nagar <br/> Trichy, Tamilnadu</p>
          </div>
          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91-6382-00791</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>example@email.com</p>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <div className="contact-form">

          <h2>Send Message</h2>

          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Email Address" />

          <textarea placeholder="Type your message..."></textarea>

          <button>Send Message</button>

        </div>

      </div>

    </section>
  );
}

export default Contact;