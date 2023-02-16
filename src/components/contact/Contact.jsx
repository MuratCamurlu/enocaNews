import React, { useRef, useState } from "react";
import style from "./Contact.module.css";
import phone from "../../assets/img2/phone.png";
import email from "../../assets/img2/email.png";
import adres from "../../assets/img2/adres.png";
import emailjs from "emailjs-com";
import { toastSuccessNotify } from "../../toasty/toastyNotify";
const Contact = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [youemail, setYouEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nn018vs",
        "template_joqdt8a",
        formRef.current,
        "4uXTCQxKVt24Z8mNM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setSubject("");
    setYouEmail("");
    setMessage("");
    toastSuccessNotify("Mail succesfully");
  };
  return (
    <div className={style.c}>
      <div className={style.bg}></div>
      <div className={style.wrapper}>
        <div className={style.left}>
          <h1 className={style.title}>Lets discus your project</h1>
          <div className={style.info}>
            <div className={style.infoItem}>
              <img src={phone} className={style.icon} />
              11111111111111
            </div>
            <div className={style.infoItem}>
              <img src={email} className={style.icon} />
              mcamurlu1923@gmail.com
            </div>
            <div className={style.infoItem}>
              <img src={adres} className={style.icon} />
              Korgan-ORDU
            </div>
          </div>
        </div>
        <div className={style.right}>
          <p className={style.desc}>
            <b>Whats your story?</b> Get in touch.Always freelancing if the
            right projects comes along.
          </p>
          <form className={style.form} ref={formRef} onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              value={youemail}
              onChange={(e) => setYouEmail(e.target.value)}
              type="text"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Message"
              cols="30"
              rows="5"
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
