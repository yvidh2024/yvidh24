import React, { useState } from 'react';
import './department.css'
import Events from '../events/events'


export default function Department() {
  const [activeSection, setActiveSection] = useState('ai');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };
  const departments = {
  cse: [
    {
      src: './assets/carouselImages/01.jpg',
      title: 'CPU Assembly',
      filename: 'cpuassembly.pdf',
      filelink: "./assets/rules/cpuassembly.pdf",
      id:"1",
      reglink:" "
    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Debugging',
      filename: 'codedebugging.pdf',
      filelink: "./assets/rules/codedebugging.pdf " ,
      id:"2",
      reglink:"https://forms.gle/edN4ENaEmwDwffE98"    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Anime Quiz',
      filename: 'animequiz.pdf',
      filelink: "./assets/rules/animequiz.pdf " ,
      id:"3",
      reglink:"https://forms.gle/6TkS8vVUv6b6MdLL7"    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Scrambled Keyboard',
      filename: 'scrambledkeyboard.pdf',
      filelink: "./assets/rules/scrambledkeyboard.pdf " ,
      id:"4",
      reglink:"https://forms.gle/1iiGqcuwDS5Rve3f9"    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Sports(BGMI)',
      filename: 'bgmi.pdf',
      filelink: "./assets/rules/bgmi.pdf " ,
      id:"5",
      reglink:"https://forms.gle/MBHj6DE49ZLERnks7"    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'PC Hardware Exhibition',
      filename: 'hardware.pdf',
      filelink: "./assets/rules/hardware.pdf " ,
      id:"6",
      reglink:""    },
    {
      src: './assets/carouselImages/01.jpg',
      title: 'Robotic Exhibition',
      filename: 'robotics.pdf',
      filelink: "./assets/rules/robotics.pdf " ,
      id:"7",
      reglink:""    },
  ],
 ai: [
    {
      src: './assets/carouselImages/02.jpg',
      title: 'Website Development',
      filename: 'webdevelopment.pdf',
      filelink: "./assets/rules/webdevelopment.pdf " ,
      id:"8",
      reglink:" "    },
    {
      src: './assets/carouselImages/02.jpg',
      title: 'QR Treasure Hunt',
      filename: 'qrtreasurehunt.pdf ',
      filelink: "./assets/rules/qrtreasurehunt.pdf " ,
      id:"9",
      reglink:" "    },
    {
      src: './assets/carouselImages/02.jpg',
      title: 'Prompt Literaria',
      filename: 'promptliteraria.pdf',
      filelink: "./assets/rules/promptliteraria.pdf " ,
      id:"10",
      reglink:" "    },
  ],
  ece: [
    {
      src: './assets/carouselImages/03.jpg',
      title: 'MATRICODE',
      filename: 'matricode.pdf',
      filelink: "./assets/rules/matricode.pdf " ,
      id:"11",
      reglink:"https://forms.gle/MpqLi7yUijLyAsmf9"    },
    {
      src: './assets/carouselImages/03.jpg',
      title: 'NEED FOR SPEED',
      filename: 'nfs.pdf',
      filelink: "./assets/rules/nfs.pdf " ,
      id:"12",
      reglink:"https://forms.gle/98NA2fbNug4274dFA"    },
    {
      src: './assets/carouselImages/03.jpg',
      title: 'KNOWLEDGE KNOCKOUT',
      filename: 'knowledge.pdf',
      filelink: "./assets/rules/knowledge.pdf" ,
      id:"37",
      reglink:"https://forms.gle/sfxHUVrKRpgyiC5V7"    },
      {
        src: './assets/carouselImages/03.jpg',
        title: 'FUNTASTIC CORNER',
        filename: 'funtasticcorner.pdf',
        filelink: "./assets/rules/funtasticcorner.pdf " ,
        id:"13",
        reglink:"https://forms.gle/JXRqoESeQFxSpHzW8"    },
  ],
  mech: [
    {
      src: './assets/carouselImages/04.jpg',
      title: 'MASTER MECH',
      filename: 'mastermech.pdf',
      filelink: "./assets/rules/mastermech.pdf " ,
      id:"14",
      reglink:"https://forms.gle/MFwEFBhcXjYCsDcUA"
    },
    {
      src: './assets/carouselImages/04.jpg',
      title: 'LATHE MAESTRO',
      filename: 'LatheMaestro.pdf',
      filelink: "./assets/rules/lathemaestro.pdf " ,
      id:"15",
      reglink:"https://forms.gle/MFwEFBhcXjYCsDcUA"
    },
    {
      src: './assets/carouselImages/04.jpg',
      title: 'LFR(Follow The Line)',
      filename: 'lfr.pdf',
      filelink: "./assets/rules/lfr.pdf " ,
      id:"16",
      reglink:"https://forms.gle/MFwEFBhcXjYCsDcUA"
    },
    {
      src: './assets/carouselImages/04.jpg',
      title: 'SLOW AS SNAIL',
      filename: 'slowassnail.pdf',
      filelink: "./assets/rules/slowassnail.pdf " ,
      id:"17",
      reglink:"https://forms.gle/MFwEFBhcXjYCsDcUA"
    },
    {
      src: './assets/carouselImages/04.jpg',
      title: 'ISRO EXPO',
      filename: 'spaceexpo.pdf',
      filelink: "./assets/rules/spaceexpo.pdf " ,
      id:"18",
      reglink:"https://forms.gle/MFwEFBhcXjYCsDcUA"
    },
  ],
 civil: [
    {
      src: './assets/carouselImages/05.jpg',
      title: 'CHESS MASTER',
      filename: 'chessmaster.pdf',
      filelink: "./assets/rules/chessmaster.pdf " ,
      id:"19",
      reglink:"https://forms.gle/oznCQLCgU52cwdRn6"
    },
    {
      src: './assets/carouselImages/05.jpg',
      title: 'Crafty Cuts',
      filename: 'craftycuts.pdf',
      filelink: "./assets/rules/craftycuts.pdf " ,
      id:"20",
      reglink:"https://forms.gle/RYATvUfcw9YJaTSf6"
    },
    {
      src: './assets/carouselImages/05.jpg',
      title: 'CADDSTER',
      filename: 'caddster.pdf',
      filelink: "./assets/rules/caddster.pdf " ,
      id:"21",
      reglink:"https://forms.gle/fdj7ZmEhsz5vqDm4A"
    },
    {
      src: './assets/carouselImages/05.jpg',
      title: 'Setup the Mould',
      filename: 'setupthemould.pdf',
      filelink: "./assets/rules/setupthemould.pdf " ,
      id:"22",
      reglink:"https://forms.gle/jRMWM8bAaXVYpgkt6"
    },
  ],
eee: [
    {
      src: './assets/carouselImages/06.jpg',
      title: 'MADRUSH',
      filename: 'madrush.pdf',
      filelink: "./assets/rules/madrush.pdf " ,
      id:"23",
      reglink:"https://forms.gle/uapFsgTemfaTHuHD9"
    },
    {
      src: './assets/carouselImages/06.jpg',
      title: 'SHOOTOUT',
      filename: 'shootout.pdf',
      filelink: "./assets/rules/shootout.pdf " ,
      id:"24",
      reglink:"https://forms.gle/jYG7KYSFfp9RCufS8"
    },
    {
      src: './assets/carouselImages/06.jpg',
      title: 'Orate (PPT Presentation)',
      filename: 'orate.pdf',
      filelink: "./assets/rules/orate.pdf " ,
      id:"25",
      reglink:"https://forms.gle/8B7ZUN3WJXDimzV86"
    },
    {
      src: './assets/carouselImages/06.jpg',
      title: 'PERIOD PAIN SIMULATOR (EXHIBITION)',
      filename: 'periodpainsimulator.pdf',
      filelink: "./assets/rules/periodpainsimulator.pdf " ,
      id:"26",
      reglink:""
    },
  ],
  agri: [
    {
      src: './assets/carouselImages/01.webp',
      title: 'Tractor Parking',
      filename: 'tractor.pdf',
      filelink: "./assets/rules/tractor.pdf " ,
      id:"27",
      reglink:"https://forms.gle/iRgiPy8eGD2f368Q6"
    },
    {
      src: './assets/carouselImages/01.webp',
      title: 'DRONE EXPO',
      filename: 'drone.pdf',
      filelink: "./assets/rules/drone.pdf" ,
      id:"29",
      reglink:""
    },
    
  ]
}
  return (
    <div className='depmaincont'>
      <div className='deplist'>
        <div className="depnav">
          <div className={`depname ${activeSection === 'ai' ? 'active' : ''}`} onClick={() => handleSectionClick('ai')}>
            <a href="#ai">AI/ML</a>
          </div>
          <div className={`depname ${activeSection === 'mech' ? 'active' : ''}`} onClick={() => handleSectionClick('mech')}>
            <a href="#mech">MECH</a>
          </div>
          <div className={`depname ${activeSection === 'civil' ? 'active' : ''}`} onClick={() => handleSectionClick('civil')}>
            <a href="#civil">CIVIL</a>
          </div>
          <div className={`depname ${activeSection === 'agri' ? 'active' : ''}`} onClick={() => handleSectionClick('agri')}>
            <a href="#agri">AGRI</a>
          </div>
          <div className={`depname ${activeSection === 'ece' ? 'active' : ''}`} onClick={() => handleSectionClick('ece')}>
            <a href="#ece">ECE</a>
          </div>
          <div className={`depname ${activeSection === 'eee' ? 'active' : ''}`} onClick={() => handleSectionClick('eee')}>
            <a href="#eee">EEE</a>
          </div>
          <div className={`depname ${activeSection === 'cse' ? 'active' : ''}`} onClick={() => handleSectionClick('cse')}>
            <a href="#cse">CSE</a>
          </div>
        </div>
      </div>
      <div className='depevent'>
        {Object.keys(departments).map((deptKey) => (
          <section className="eventsec" id={deptKey} key={deptKey} style={{ display: activeSection === deptKey ? 'block' : 'none' }}>
            <Events dept={departments[deptKey]} />
          </section>
        ))}
      </div>
    </div>
  )
}
