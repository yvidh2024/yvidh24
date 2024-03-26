import React from 'react'
import './events.css'
import Carousel from '../carouel/carouselMain'

export default function events({dept}) {
  return (
    <div className='maineventcontainer'>
        <div className="eventheading anta-regular">
            <h1 className="eventheading" >Featured Events</h1>
        </div>
      <Carousel dept={dept} />
    </div>
  )
}
