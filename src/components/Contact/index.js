import React from 'react';

import './Contact.css'

export default function Contact() {
  return (
    <div>
      <div className="App">
        <h1>Contact Us</h1>
        <div>
          <form action="">

            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name" />

            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name" />

            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />

            <label>Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something" />
            
            <input type="submit" value="Submit" />
            
          </form>
        </div>
      </div>
    </div>
  )
}
