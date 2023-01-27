import React, { useState } from 'react'
import { DAYS, MONTHS } from './Const'
import { areDatesTheSame, getDaysInMonths, getSortDays, range, getDateObj, getRandomDarkColor } from './Utils'

export default function Calender({ startingDate, eventsArr, addEvents }) {
  const [currentMonth, setCurrentMonth] = useState(1);
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
  const DaysInMonth = getDaysInMonths(currentMonth, currentYear);

  // next button for month change
  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  }
// prev button for month change
  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  }
  const onAddEvent = (date) => {
    addEvents(date, getRandomDarkColor());
  }

  return (
    <div className='wrapperDiv'>
      <div className='calenderWrapper'>
        <ion-icon onClick={nextMonth} name="arrow-back-circle-outline"></ion-icon>
        {/* current month and year */}
        {MONTHS[currentMonth]} {currentYear}
        <ion-icon onClick={prevMonth} name="arrow-forward-circle-outline"></ion-icon>
      </div>
      <div className='sevenGrid' fourCol={DaysInMonth === 28}>
        {/* displayig days  */}
        {getSortDays(currentMonth, currentYear).map((days) => <span className='headDays'>{days}</span>)}
      </div>
      <div className='calenderBody'>
        {/* displayig dates */}
        {range(DaysInMonth).map((day) =>
          <span className='styledDay'
            onClick={() => onAddEvent(getDateObj(day, currentMonth, currentYear))}
            active={
              areDatesTheSame(new Date(), getDateObj(day, currentMonth, currentYear))}
          >
            <p>{day}</p>
            {
              eventsArr.map((ev) => {
                areDatesTheSame(getDateObj(day, currentMonth, currentYear), ev.date) &&
                  <span className='styleEvent'>{ev.title}</span>
              })
            }

          </span>)}

      </div>
    </div>
  )
}
