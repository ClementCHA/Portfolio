/* eslint-disable no-sequences */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ContactField from './field';
import './styles.scss';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    await fetch('https://clementcharlesortfolio.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
      .then(() => {
        alert('Message envoyé');
      });
  };
  return (
    <>
      <div className="contact">
        <h1 className="contact-me">
          Me Contacter
        </h1>
        <div className="contactForm">
          <form
            className="form"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <div className="contactForm-input">
                <ContactField
                  type="text"
                  id="name"
                  label="Name"
                  placeholder="Name"
                  required
                />
                <ContactField
                  type="email"
                  id="email"
                  label="Email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="contactForm-message">
                <textarea id="message" required className="contactForm-textArea" />
              </div>
              <div className="button">
                <button type="submit" className="contactForm-button">Envoyer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
