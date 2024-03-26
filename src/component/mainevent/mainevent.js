import React from 'react'
import Events from '../events/events'


export default function Mainevent() {
    const mainevent = [
        {
            src: './assets/carouselImages/vadhyadhwani.webp',
            title: 'Vadhya Dhawani',
            filename: 'vadhyadhawani.jpg',
            filelink:"./assets/rules/vadhyadhwaniguidelines.jpg",
            id:"33",
            reglink:'https://forms.gle/DpX4mbX2Sdeww2Xq8'
          },
          {
            src: './assets/carouselImages/raagaFINAL.webp',
            title: 'RAAGA',
            filename: 'raaga.jpg',
            filelink:"./assets/rules/raagaguidelines.jpg",
            id:"34",
            reglink:"https://forms.gle/A4VxtTC3G2qNJTqt6"
          },
          {
            src: './assets/carouselImages/NATYAfinal.webp',
            title: 'NATYA',
            filename: 'natya.jpg',
            filelink:"./assets/rules/NATYA-guidelines.jpg",
            id:"35",
            reglink:"https://forms.gle/6QM95bdk4dnc5eKf6"
          },
          {
            src: './assets/carouselImages/MUSCLEWAR.webp',
            title: 'Muscle War',
            filename: 'musclewar.jpg',
            filelink:"./assets/rules/MUSCLEWARguidelines.jpg",
            id:"36",
            reglink:"https://forms.gle/XzEAg9heegorschd8"
          },
    ]
  return (
    <div className='depmaincont specialcont'>
        <div className='depevent'>
        <section className="eventsec">
            <Events dept={mainevent} />
          </section>
    </div>
    </div>
    
  )
}
