import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <section
    id="contact"
    className="h-screen pt-28 px-4 bg-white dark:bg-transparent text-center transition-colors duration-500 flex justify-center items-start"
  >
    <StyledWrapper>
      <div className="form-card1 max-w-md w-full mx-auto">
        <div className="form-card2">
          {/* ✅ Formspree Activation */}
          <form
            className="form"
            action="https://formspree.io/f/xayrzddy"
            method="POST"
          >
            <p className="form-heading">Get In Touch</p>

            <div className="form-field">
              <input
                name="name"
                required
                placeholder="Name"
                className="input-field"
                type="text"
              />
            </div>

            <div className="form-field">
              <input
                name="email"
                required
                placeholder="Email"
                className="input-field"
                type="email"
              />
            </div>

            <div className="form-field">
              <input
                name="subject"
                required
                placeholder="Subject"
                className="input-field"
                type="text"
              />
            </div>

            <div className="form-field">
              <textarea
                name="message"
                required
                placeholder="Message"
                cols={30}
                rows={3}
                className="input-field"
              />
            </div>

            <button type="submit" className="sendMessage-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  </section>
);

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 20px;
  }

  .form-heading {
    text-align: center;
    margin: 2em;
    color: #64ffda;
    font-size: 1.2em;
  }

  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #ccd6f6;
    padding-inline: 1em;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    background-color: transparent;
    color: #64ffda;
    font-weight: bold;
    outline: 1px solid #64ffda;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:hover {
    background-color: #64ffda;
    color: #000;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .form-card1 {
    background-image: linear-gradient(163deg, #64ffda 0%, #64ffda 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .form-card1:hover {
    box-shadow: 0px 0px 30px 1px rgba(100, 255, 218, 0.3);
  }

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export default Contact;