import * as React from 'react';
import Event from './Event';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


function EventsList(props) {
    const events = props.events;
    const date = props.date.toDateString();
    return (
        props.isVisible
            ? (
                events && events.map(event => event.eventDate === date ? <Event event={event} key={event.id} /> : null
                )
            )
            : null
    )

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


