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
    <form ref={form} className="m-10">
      <h2 className="text-black text-2xl font-semibold ">
        Contactez notre boulangerie
      </h2>
      <p>
        E-mail : info@yasoma.fr <br />
        Tél : 02 00 00 00 00 <br /> N'hésitez pas à nous joindre !
      </p>
      <div className="">
        <div className=" w-64 m-2">
          <input
            className="m-2 w-60 border-2 border-black"
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="nom *"
            value={name}
            autoComplete="off"
          />
        </div>

        <div className=" w-64 m-2">
          <input
            className="m-2 w-60 border-2 border-black"
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <div className=" w-64 m-2">
          <textarea
            className="m-2 h-20 w-60 border-2 border-black"
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </div>
      </div>
      <input
        className="w-36 flex justify-center rounded-md ring bg-black text-white mx-16 my-4 hover:bg-blue-200 "
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default App;
