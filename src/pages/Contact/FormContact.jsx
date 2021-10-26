import React, { useState } from 'react'
import './FormContact.css'

const FormContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email.match(regex)){
      mail.style.display = 'none';
      return true;
    }
    else {
      mail.style.display ='block';
      mail.style.animation = 'dongle 1s';
      setTimeout(()=>{
        mail.style.animation = 'none'; 
      }, 1000)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    
  if(name && isEmail() && message) {
    sendFeedback("template_pd28912", {
      name,
      email,
      message,
    })
  }
}

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res) => {
        console.log('success !')
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch(
        (err) =>
          (document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      )
  }
  
  return (
    <form className="contact-form">
      <h2>Contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  )
}

export default FormContact