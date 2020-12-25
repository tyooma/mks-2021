import * as React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'

import EventsList from './Events/EventsList'
import AddEventForm from './AddEventForm'

import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

export const Calendar = () => {
  const Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const Days_Leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const Months = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень'
  ]
  const today = new Date()

  const auth = useSelector((state) => state.firebase.auth)
  const [date, setDate] = useState(today)
  const [day, setDay] = useState(date.getDate())
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setDay(date.getDate())
    setMonth(date.getMonth())
    setYear(date.getFullYear())
  }, [date])

  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

  const days = isLeapYear(date.getFullYear()) ? Days_Leap : Days

  const daysArray = new Array(days[month]).fill(null)

  return (
    <div className='calendar'>
      <div className='calendar__bar'>
        <div onClick={() => setDate(new Date(year, month - 1, day))}>
          <img src={arrowLeft} alt='prev' className='calendar__arrow' />
        </div>
        <div className='calendar__month'>
          {Months[month]} {year}
        </div>
        <div onClick={() => setDate(new Date(year, month + 1, day))}>
          <img src={arrowRight} alt='next' className='calendar__arrow' />
        </div>
      </div>
      <div className='calendar__days'>
        {daysArray.map((i, index) => {
          const d = index + 1
          const calendarDays = new Date(year, month, d)
          return (
            <div
              key={index}
              className={cx(
                'calendar__day',
                {
                  calendar__weekend:
                    calendarDays.getDay() === 0 || calendarDays.getDay() === 6
                },
                { calendar__today: d === today.getDate() },
                { calendar__selected: d === day },
                { calendar__selected: calendarDays.getDate() === day }
              )}
              onClick={() => {
                setDate(new Date(year, month, d))
                if (date.getDate() !== d) {
                  setIsVisible(true)
                } else {
                  setIsVisible(!isVisible)
                }
              }}
            >
              {d}
            </div>
          )
        })}
      </div>
      <EventsList isVisible={isVisible} date={date} />
      {auth.uid ? <AddEventForm /> : null}
    </div>
  )
}
