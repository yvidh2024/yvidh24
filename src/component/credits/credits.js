import React from "react";
import './contacts.css'

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
      <p className="info position">{props.position}</p>
        <p className="info">{props.phone}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}
function ContactCards() {
  const contactsData = [
    {
      name: "Denny Santhosh",
      phone: "9526670289",
      position: "Frontend Developer",
      mail: "dennysanthosh@gmail.com",
      img: "./assets/contact/bejoy.webp"
    },
    {
      name: "Steeve Binu Baby",
      phone: "8156917522",
      position: "Frontend Developer",
      mail: "s.sarath@stthomascollege.ac.in",
      img: "./assets/contact/sarath.jpg"
    },
    {
      name: "Febin",
      img: "./assets/contact/safwan.webp",
      position: "UI/UX Designer",
      phone: "8129156016",
      mail: "safwansidhik7@gmail.com"
    },
    {
      name: "Aswan",
      phone: "7306320116",
      position: "Vice Chairperson",
      mail: "joshuadiya10@gmail.com",
      img: "./assets/contact/diya.jpg"
    }
  
    
    
  ];

  return (
    <div className="contactmaincontainer">
      <h1 className="contactheading">Contacts</h1>
      <div className="contactflexcontainer">
        {contactsData.map((contact, index) => (
          <div className="contactflex" key={index}>
            <Card {...contact} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactCards;
