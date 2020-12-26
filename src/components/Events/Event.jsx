import * as React from 'react'
import { connect, useSelector } from 'react-redux'

import { deleteEvent } from '../../store/actions/eventActions'

const Event = ({ event, deleteEvent }) => {
  const auth = useSelector((state) => state.firebase.auth)

  return (
    <div className='event'>
      <div className='event__img-container'>
        <img src={event.image} alt='event poster' className='event__img' />
      </div>
      <div className='event__info'>
        <div className='event__title'>{event.title}</div>
        <div className='event__desc'>{event.description}</div>
        <a
          href={event.url}
          target='_blank'
          rel='noreferrer'
          className='event__link'
        >
          Посилання на подію
        </a>
      </div>
      {auth.uid ? (
        <div className='event__delete'>
          <ion-icon
            name='close-outline'
            onClick={() => deleteEvent(event.megaId)}
          />
        </div>
      ) : null}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (id) => dispatch(deleteEvent(id))
  }
}

export default connect(null, mapDispatchToProps)(Event)
