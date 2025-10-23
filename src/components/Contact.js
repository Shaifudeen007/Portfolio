import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Contact = () => (
  <section
    id="contact"
    className="h-screen pt-28 px-4 bg-white dark:bg-transparent text-center transition-colors duration-500 flex justify-center items-start relative overflow-hidden"
  >
    <StyledWrapper>
      <motion.div 
        className="form-card1 max-w-md w-full mx-auto hover-lift relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="form-card2">
          {/* ✅ Formspree Activation */}
          <form
            className="form"
            action="https://formspree.io/f/xayrzddy"
            method="POST"
          >
            <motion.p 
              className="form-heading animate-text-shimmer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.p>

            <motion.div 
              className="form-field"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <input
                name="name"
                required
                placeholder="Name"
                className="input-field"
                type="text"
              />
            </motion.div>

            <motion.div 
              className="form-field"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                name="email"
                required
                placeholder="Email"
                className="input-field"
                type="email"
              />
            </motion.div>

            <motion.div 
              className="form-field"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <input
                name="subject"
                required
                placeholder="Subject"
                className="input-field"
                type="text"
              />
            </motion.div>

            <motion.div 
              className="form-field"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <textarea
                name="message"
                required
                placeholder="Message"
                cols={30}
                rows={3}
                className="input-field"
              />
            </motion.div>

            <motion.button 
              type="submit" 
              className="sendMessage-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>

      {/* Floating Contact Elements */}
      <motion.div
        className="absolute top-32 right-20 w-8 h-8 border-2 border-blue-400/30 dark:border-green-400/30 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear"
        }}
      />
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