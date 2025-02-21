import { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!data) {
    return null;
  }

  const {
    name: contactName,
    address: { street, city, state, zip },
    phone,
    email: contactEmail,
    contactMessage,
  } = data;

  const { name, email, subject, message } = formData;

  const submitForm = (e) => {
    e.preventDefault(); // Prevent default form submission

    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
      email
    )}): ${encodeURIComponent(message)}`;

    window.open(mailtoLink);
  };

  return (
    <section id="contact">
      <motion.div
        className="row section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </motion.div>

      <div className="row">
        <motion.div
          className="eight columns"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <form onSubmit={submitForm}>
            <fieldset>
              <div>
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  size="35"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  size="35"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  value={subject}
                  size="35"
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={handleChange}
                  id="message"
                  name="message"
                  required
                ></textarea>
              </div>

              <div>
                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </motion.div>

        <motion.aside
          className="four columns footer-widgets"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              <a href="mailto:shadabanwar1810@gmail.com">Mail me</a>
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}, India
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Contact;

