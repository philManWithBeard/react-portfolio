import React, { useState } from "react";

// Endpoint to post details to
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/ac113350-c77a-11ee-bb69-515451de93af";

// function to handle the stateful react form
const ContactForm = () => {
  // declare state for submitted and set it to false
  const [submitted, setSubmitted] = useState(false);

  //
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <p>Thank you!</p>
        <p>I'll be in touch soon.</p>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className="align-items-start row g-2"
    >
      <div>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
          className="w-100 p-2"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="w-100 p-2"
        />
      </div>
      <div>
        <textarea
          placeholder="Your message"
          name="message"
          required
          className="w-100 p-2"
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn-dark rounded-0 btn-dark btn btn-lg px-4"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
