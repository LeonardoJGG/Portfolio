import React, { useState, useEffect, useRef } from 'react'
import emailjs from "emailjs-com"

const Contact = () => {

  const myForm = useRef(null);
  const [visible, setVisible] = useState(false);

  const sendMail = (event) => {
    event.preventDefault();
  
    emailjs
      .sendForm(
        "service_n81xhdb",
        "template_9mj9uxu",
        event.target,
        "ZVPedDrbeLnYTKHQx"
      )
      .then(
        (result) => {
          console.log('Success');
        },
        (error) => {
          console.log(error.text);
        }
      );

      myForm.current.reset();

      setVisible(true);
  };



  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div className='container contact'>
      <div className="wrapper">

          <div className="title ">
            <h2 className="let-me">LET ME INTRODUCE MYSELF</h2>
            <h2 className="title-name">CONTACT ME</h2>
          </div>

          <div className="form">
            <form ref={myForm} onSubmit={sendMail}>
              <div className="name">
                <input type="text" placeholder='Enter Name' name="name" className='input' required />
                <input type="text" placeholder='Enter Lastname' name="lastname" className='input' required />
              </div>

              <input type="mail" placeholder='Enter Email' name="email" className='input' required />
              <textarea placeholder='Enter Message' name="message" id="" cols="30" rows="4" className='input' required ></textarea>
            

              <div className="button">
                <button type='submit'  >SEND</button>
              </div>
            </form>

                {visible && (
                  <div className='alert-container'>
                    <div className="alert">
                      <div className="bar"></div>
                      <p> <span>Thank you!</span> Your message has been sent!</p>
                    </div>
                  </div>
                )}
          </div>

      </div>
    </div>
  )
}

export default Contact