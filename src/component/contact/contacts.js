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
      name: "Bejoy Antony",
      phone: "9037950568",
      position: "Techfest Coordinator",
      mail: "bejoy@stthomascollege.ac.in",
      img: "./assets/contact/bejoy.webp"
    },
    {
      name: "S.Sarath",
      phone: "9746550371",
      position: "Techfest Coordinator",
      mail: "s.sarath@stthomascollege.ac.in",
      img: "./assets/contact/sarath.jpg"
    },
    {
      name: "Safwan Sidhik",
      img: "./assets/contact/safwan.webp",
      position: "Chairperson",
      phone: "9746805369",
      mail: "safwansidhik7@gmail.com"
    },
    {
      name: "Diya Elizabeth",
      phone: "9778053891",
      position: "Vice Chairperson",
      mail: "joshuadiya10@gmail.com",
      img: "./assets/contact/diya.jpg"
    },
    {
      name: "Sudhi P S",
      phone: "9037171346",
      position: "Arts Secretary",
      mail: "sudhips06@gmail.com",
      img: "./assets/contact/sudhi.jpg"
    },
    
    
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
