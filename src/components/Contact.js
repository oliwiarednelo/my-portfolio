import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";


export const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
const [confirmation, setConfirmation] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_33526ez', 'template_kpsvdaa', form.current, 'f4eUL1TLIyWeF4caW')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
            setEmail("")
            setMessage("")
            setName("")

      }, (error) => {
          console.log(error.text);
      });
  };

 

  return (
    <> 
   
    
<div className="contact-form">
    <div className='contact-intro'>
        <h2>Do you like<br></br> my work?</h2>
        <p>Let's connect!</p>
        </div>
        <div className='form'>
    <form ref={form} onSubmit={sendEmail} >
      <label className='name'>Name</label>
      <input type="text" name="user_name"  placeholder='Your name...' onChange={(e) => setName(e.target.value)} value={name}required/>
      <label className='email'>Email</label>
      <input type="email" name="user_email"  placeholder='Your email...' onChange={(e) => setEmail(e.target.value)} value={email} required/>
      <label className='message'>Message</label>
      <textarea name="message"  placeholder='Type your message here...' onChange={(e) => setMessage(e.target.value)} value={message}required/>
      {confirmation ? <div className='confirmation-message'>
    <p>Thank you for your message :)</p>
 </div> : null}
     <button  className="btn-submit" type='submit' value="Send" onClick={() => {setConfirmation(true)}}>SEND</button>
   
    </form>
    </div>
    </div>
    </>
  );
};

export default Contact;