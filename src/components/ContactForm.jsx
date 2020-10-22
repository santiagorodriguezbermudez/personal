import React from 'react';

const ContactForm = () => (
  <div className="bg-white">
    <section className="contact-form" id="contact">
      <form action="/landing">
        <input type="hidden" name="form-name" value="contact" />
        <h2>Contact Me</h2>
        <p>
          Reach out if you need help building an awesome product.
          I can help you out with strategy, product, implementing or any advisory about a product.
        </p>
        <input type="text" name="name" id="name" placeholder="Type your name" />
        <input type="email" name="email" id="email" placeholder="Type your email" />
        <textarea name="message" id="message" placeholder="How can I help you?" rows="10" />
        <input type="submit" className="submit-button" value="Send" />
      </form>
    </section>
  </div>
);

export default ContactForm;
