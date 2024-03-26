import React, { useState, useEffect } from 'react';
import { Parallax } from "react-parallax";
import "./faq.css";
import Faqmain from "./faqmain";

export default function Fag() {
  const [faqs, setFaqs] = useState([
    {
      question: "Do you have any transportation facilities?",
      answer:
        "No",
      open: false
    },
    {
      question: "Do you Provide Participation Certificates?",
      answer: "Yes,will be provided after the completion of particular event",
      open: false
    },
    {
      question:
        "How many events can a single individual can participate?",
      answer: "Can participate in all events based on time slot provided.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  const [imageSrc, setImageSrc] = useState('./assets/faq/v102_15.webp');
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setImageSrc('./assets/faq/pv102_15.webp');
            } else {
                setImageSrc('./assets/faq/v102_15.webp');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div className="faqmaincontainer">
      <div className="faqcontainer">
        <Parallax
          className="FaqParallax"
          bgImage={imageSrc}
          strength={800}
        ></Parallax>
        <div className="faqinnercontainer">
          <div className="faqcontent">
            <div className="faqheading">
              <div><h2>FAQ</h2></div>
            </div>
            <div className="faqmaincontent">
            <div className="faqs">
        {faqs.map((faq, index) => (
          <Faqmain faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
          </div>
          </div>
          
        </div>
        <div className="footercontainer">
          <div className="footercontent">
            <div className="fleft fitem">
              <div className="fleftinner">
                <h5><a className="flefta" href="">WWW.Yvidh.live</a></h5>
              </div>
            </div>
            <div className="fcenter fitem">
              <div className="fcenterinner">
                <div className="fcenterimg">
                <img src="./assets/home/yvidh.png"/>
                </div>
                <div><h5>Powered by Yvidh24</h5></div>
                <div><h5>website committe</h5></div>
                
                
                
              </div>
            </div>
            <div className="fright fitem">
              <div className="frightinner">
                <a href="https://www.facebook.com/YvidhOfficial?mibextid=kFxxJD"><img src="./assets/faq/facebook.png" /></a>
                <a href="https://www.instagram.com/yvidh2k24/"><img src="./assets/faq/instagram.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
