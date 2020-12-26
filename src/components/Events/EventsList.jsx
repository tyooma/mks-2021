import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import Event from './Event'

function EventsList(props) {
  const eventList = props.events

  const [events, setEvents] = useState(null)

  useEffect(() => {
    if (eventList) {
      setEvents(
        Object.keys(eventList).map((key) => {
          return {
            ...eventList[key],
            megaId: key
          }
        })
      )
    }
  }, [eventList])

  const date = props.date.toDateString()

  return props.isVisible
    ? events && (
        <div className='events'>
          {events.map((event) =>
            event.eventDate === date ? (
              <Event event={event} key={event.id} />
            ) : null
          )}
        </div>
      )
    : null
}

const mapStateToProps = (state) => {
  return {
    events: state.firestore.data.Events
  }
}

export default compose(
  firestoreConnect(() => ['Events']),
  connect(mapStateToProps)
)(EventsList)
