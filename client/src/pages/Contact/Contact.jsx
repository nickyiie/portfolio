import { useState } from 'react';
import './Contact.scss';

function Contact() {
  // const [status, setStatus] = useState("Submit");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("http://localhost:8080/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Submit");
  //   let result = await response.json();
  //   e.target.reset();
  //   alert(result.status);
    
  // };

  return (
    <div className='contact'>
      <div className='contact__left'>
        <form name='contactForm' className='contact__form' methods='POST' data-netlify="true" >
          <div className='contact__container'>
            <input className='contact__input' type='text' name='name' placeholder={`What's your name?`} required></input>
            <input className='contact__input' type='email' name='email' placeholder='Email?' required></input>
            <textarea className='contact__details' type='text' name='message' placeholder='Details...' required></textarea>
            <button className='contact__button'>Let's do it!</button>
          </div>
        </form>
      </div>
      <div className='contact__right'>
        <h1 className='contact__call'>
          Let's Get Started!
        </h1>
      </div>
    </div>
  )
}

export default Contact;