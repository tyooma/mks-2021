import React, { useState } from 'react';
import AddEventForm from './AddEventForm';


const AddEventButton = () => {

    const [eventToggle, setEventToggle] = useState(false);

    return (
        <div>
        <button onClick={() => setEventToggle(!eventToggle)}>
            Create Event
        </button>
            { eventToggle ? <AddEventForm /> : '' }
            </div>
        )


}

export default AddEventButton;