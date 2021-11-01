import emailjs, { init } from 'emailjs-com';
import React, { useRef, useState } from 'react';

init('user_32u6RoYbe83EE0LqfkUea');

const App = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback({
      name,
      email,
      message,
    });
  };

  const sendFeedback = (variables) => {
    emailjs
      .send('service_uqacw2g', 'template_1xffkez', variables)
      .then((res) => {
        setName('');
        setEmail('');
        setMessage('');
        document.querySelector('.form-message').innerHTML =
          'Message envoyé avec succès !';
      })
      .catch(
        (err) =>
          (document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <form ref={form} className="contact-form">
      <div className="form-message"></div>

      <h2>Contactez-nous</h2>
      <div className="form-content">
        <label>
          Name
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            autoComplete="off"
          />
        </label>

        <div className="email-content">
          <label>
            Email
            <input
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email *"
              value={email}
              autoComplete="off"
            />
          </label>
        </div>

        <label>
          Message
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </label>
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default App;
