import React from 'react';
import Calendar from './components/Calendar/Calendar';
import Navbar from './components/Auth/Navbar'

// import AddEventForm from './components/AddEventForm/AddEventForm'



const App = () => {
    
    return (
        <div className='app-wrapper'>
           <Navbar />
            <Calendar />      
        </div>
    )
}

export default App;