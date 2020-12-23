import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import { Event } from './Event'

function EventsList(props) {
  const events = props.events
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
    events: state.firestore.ordered.Events
  }
}

export default compose(
  firestoreConnect(() => ['Events']),
  connect(mapStateToProps)
)(EventsList)
