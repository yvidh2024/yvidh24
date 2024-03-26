import React from 'react'
import Events from '../events/events'


export default function Special() {
    const special = [
        {
            src: './assets/carouselImages/AUTOSHW.webp',
            title: 'AUTOSHOW',
            filename: '',
            id:"30",
            reglink: ''
          },
          {
            src: './assets/carouselImages/soapyfootball.webp',
            title: 'SOAPY FOOTBALL',
            filename: '',
            id:"31",
            reglink:''
          },

    ]
  return (
    <div className='depmaincont specialcont'>
        <div className='depevent'>
        <section className="eventsec">
            <Events dept={special} />
          </section>
    </div>
    </div>
    
  )
}
