import React from 'react';
import '../Contact/Contact.css'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="container">
            <h2>BOOK YOUR TABLE</h2>
            <form action="">
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Type Your E-mail' />
                <textarea name="" id="" cols="10" rows="6" placeholder='Write Here...'></textarea>
                <input type="submit" className='btn' value="BOOK" />
            </form>
        </div>
    </div>
  )
}

export default Contact