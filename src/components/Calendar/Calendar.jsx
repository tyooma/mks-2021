import * as React from 'react';
import { useState, useEffect } from 'react';
import EventsList from '../Events/EventsList'
import classes from './Calendar.module.css';
import cx from 'classnames';
import AddEventButton from '../../components/AddEventForm/AddEventButton'
import { connect } from 'react-redux';


function Calendar(props) {

  const Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const Days_Leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const Months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];



  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());

  }, [date]);



  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? Days_Leap : Days;

  const daysArray = new Array(days[month]).fill(null);

  const auth = props.auth


  return (
    <div className={classes.calendar}>
      <div className={classes.monthYear}>
        <button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</button>
        <div>
          {Months[month]} {year}
        </div>
        <button onClick={() => setDate(new Date(year, month + 1, day))}>Next</button>
      </div>
      <div className={classes.days}>
        {daysArray.map((i, index) => {
          const d = index + 1;
          return (
            <div key={index}
              className={cx(classes.day,
                { [classes.today]: d === today.getDate() },
                { [classes.selected]: d === day })}
              onClick={() => {
                console.log('DATE', date.toDateString())
                setDate(new Date(year, month, d))
                if (date.getDate() !== d) {
                  setIsVisible(true)
                } else {
                  setIsVisible(!isVisible)
                }
              }}>{d}</div>
          );
        })
        }
      </div>
      <EventsList isVisible={isVisible} date={date} />
      { auth.uid ? <AddEventButton /> : null}
    </div>

  );

}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Calendar);
