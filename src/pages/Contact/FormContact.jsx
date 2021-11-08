import emailjs, { init } from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

init('user_32u6RoYbe83EE0LqfkUea');

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendFeedback = (variables) => {
    const formMessage = document.querySelector('.form-message');
    setIsSubmitting(true);
    formMessage.innerHTML = '';
    emailjs
      .send('service_uqacw2g', 'template_1xffkez', variables)
      .then((res) => {
        formMessage.innerHTML = 'Message envoyé avec succès !';
        reset();
      })
      .catch(
        (err) =>
          (formMessage.innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="m-10">
      <h2 className="text-black text-2xl font-semibold ">
        Contactez notre boulangerie
      </h2>
      <p>
        E-mail : info@yasoma.fr <br />
        Tél : 02 00 00 00 00 <br /> N'hésitez pas à nous joindre !
      </p>

      <p className="form-message"></p>

      <form onSubmit={handleSubmit(sendFeedback)}>
        <div className="">
          <div className=" w-64 m-2">
            <input
              className="m-2 w-60 border-2 border-black"
              type="text"
              id="name"
              {...register('name', {
                required: true,
              })}
              placeholder="nom *"
            />
            <br />
            {errors.name && isDirty && <small>Le nom est obligatoire</small>}
          </div>

          <div className=" w-64 m-2">
            <input
              className="m-2 w-60 border-2 border-black"
              type="mail"
              id="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse email invalide',
                },
              })}
              placeholder="email *"
            />
            <br />
            {errors.email && isDirty && <small>{errors.email.message}</small>}
          </div>

          <div className=" w-64 m-2">
            <textarea
              className="m-2 h-20 w-60 border-2 border-black"
              id="message"
              {...register('message', { required: true })}
              placeholder="message *"
            />
            <br />
            {errors.message && isDirty && (
              <small>Le message est obligatoire</small>
            )}
          </div>
        </div>
        <button
          className="w-36 flex justify-center rounded-md ring bg-black text-white mx-16 my-4 hover:bg-blue-200 "
          type="submit"
        >
          {isSubmitting ? '...envoi en cours' : 'Envoyer'}
        </button>
      </form>
    </section>
  );
};

export default App;
