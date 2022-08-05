import "./ContactForm.css"
import React,{useState} from 'react';
import { HiLocationMarker } from "react-icons/hi";
import {
  
  FaMailBulk,
  FaPhone
  
} from "react-icons/fa";


const ContactForm = () => {

const [mail, setMail] = useState({
    name: '',
    email: '',
    message: ''
  });

  const send = async (e) => {
    console.log('send')
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mail)
      });

      const data = await response.json();
      if(data.success) {
        window.location.reload('/')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    
<div className="contactform">
      <div className="containerform">
        <h2 className="h2form" >Contact Us</h2>
      
        <div className="rowform">
          <div className="infoform">
            <div>
              <div className="iconform">
                <HiLocationMarker size={20} />
              </div>
              <div className="textform">
                <h4 className="texth4">Address</h4>
                <p className="textp">4671 Sugar Camp Road</p>
                
              </div>
            </div>
            <div>
              <div className="iconform">
                <FaPhone size={20} />
              </div>
              <div className="textform">
                <h4  className="texth4">Phone</h4>
                <p className="textp" >5057-590-659-156</p>
              </div>
            </div>
            <div>
              <div className="iconform">
                <FaMailBulk size={20} />
              </div>
              <div className="textform">
                <h4 className="texth4" >Email</h4>
                <p className="textp" >emailemail@email.com</p>
              </div>
            </div>
          </div>
          <div className="formform">
            <form onSubmit={send}>
              <h3 className="formh3">Send Message</h3>
              <div className="form-group">
                
                <input type="text" placeholder="Full Name"  className="inputform" defaultValue={mail.name} onChange={e => setMail({...mail, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" className="inputform" defaultValue={mail.email} onChange={e => setMail({...mail, email: e.target.value })} required />
              </div>
              <div className="form-group">
                <textarea
                className="inputform"
                  placeholder="Type your message..."
                  id=""
                  cols="10"
                  rows="10"
                  defaultValue={mail.message}
                  onChange={e => setMail({...mail, message: e.target.value })}
                  required 
                ></textarea>
              </div>
              <button className="but">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>



  );
}

export default ContactForm