import * as React from 'react'

export const Event = ({ event }) => (
  <div className='event'>
    <div className='event__img-container'>
      <img src={event.image} alt='event poster' className='event__img' />
    </div>
    <div className='event__info'>
      <div className='event__title'>{event.title}</div>
      <div className='event__desc'>{event.description}</div>
    </div>
  </div>
)
