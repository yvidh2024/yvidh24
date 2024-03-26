import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other necessary components from react-router-dom
import "./App.css";
import Entry from "./component/entry/entry";
import Home from "./component/home/home";
import Countdown from "./component/countdown/countdown";
import About from "./component/about/about";
import Events from "./component/events/events";
import Technical from "./component/technicalevents/technical";
import Mainpage from "./component/mainPage/mainpage";
import Faq from "./component/faq/faq";
import Featureevent from "./component/featureevent/featureevent";
import Contacts from "./component/contact/contacts";
import Department from "./component/department/department"
import Special from "./component/special/special"
import Mainevent from "./component/mainevent/mainevent";


function App() {
  const [showSections, setShowSections] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isMainPage, setIsMainPage] = useState(true);
  const [showContacts, setShowContacts] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);
  const [showMain, setShowMain] = useState(false);

  const handleContactsClick = () => {
    setShowContacts(true);
    setShowDepartments(false);
    setShowSpecial(false);
    setShowMain(false);
    document.getElementById('navbarSupportedContent').classList.remove('show');
  };
  const handleContactsundoClick = () => {
    setShowContacts(false);
    setShowDepartments(false);
    setShowSpecial(false);
    setShowMain(false);
    document.getElementById('navbarSupportedContent').classList.remove('show');
  }
  const handleDepartmentClick = () => {
    setShowDepartments(true);
  };
  const handleSpecialClick = () => {
    setShowSpecial(true);
  }
  const handleMainClick = () => {
    setShowMain(true);
  }
  
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsNavbarFixed(true);
        setIsMainPage(false);
      } else {
        setIsNavbarFixed(false);
        setIsMainPage(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Simulate preloader hiding after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowSections(true);
    },6500);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <div className="App">
        {!showSections && (
          <div className="mainentrycontainer">
            <Entry />
          </div>
        )}
        {showSections && (
          <>
          {!showContacts && !showDepartments && !showSpecial && !showMain && (
            <><section className="Sections" id="mainpage"><Mainpage/></section></>
          )}
          <div className={`navbarouter ${isNavbarFixed ? 'fixed' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brands" href="#mainpage" onClick={handleContactsundoClick}><img src="./assets/home/yvidh.webp" alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsNavbarFixed(!isNavbarFixed)}>
            <span className="navbar-toggler-icon btn-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#mainpage" onClick={handleContactsundoClick}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#featureevents" onClick={handleContactsundoClick}>Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutUs" onClick={handleContactsundoClick}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacts" onClick={handleContactsClick}>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
            {!showContacts && !showDepartments && !showSpecial && !showMain && (
              <><section className="intersection"> <img src="./assets/home/frame2.jpg" alt="" /></section>
              <section className="Sections" id="CountDown">
                <Countdown />
              </section>
              <section className="featureeventSec" id="featureevents">
                  <Featureevent handleDepartmentClick={handleDepartmentClick} handleSpecialClick={handleSpecialClick} handleMainClick={handleMainClick}/>
              </section>
              <section className="Sections" id="AboutUs">
                <About />
              </section></>
            )}
            
            
            {showDepartments && !showContacts && !showSpecial && !showMain && (
              <><section className="Sections department" id="departmentevent"><Department/></section></>
              
            )}
            {
              !showDepartments && showSpecial && !showContacts && !showMain && (
                <>
                <section className="Sections department" id="specialevent"><Special/></section></>
              )
            }
            {
              !showDepartments && !showSpecial && !showContacts && showMain &&(
                <>
                  <section className="Sections department" id="specialevent"><Mainevent/></section>
                </>
              )
            }

            
            {!showContacts && !showDepartments && !showSpecial && !showMain && (
              <><section className="Sections" id="faq"><Faq/></section></>
            )}
            {showContacts && !showDepartments && !showSpecial && !showMain && (
              <><section className="Sectionsc" id="contacts">
              <Contacts />
            </section>
            
            
            </>
            )}
            
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
