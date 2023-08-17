import React from 'react'
import Countdown from 'react-countdown';
import '../index.css'
import CountdownDisplayComponent from './CountdownDisplayComponent';


function CountdownComponent() {
  const renderFunc = (props) => <CountdownDisplayComponent days={props.formatted.days} hours={props.formatted.hours} minutes={props.formatted.minutes}/>
  return (
    <div className='countdown'>
      <Countdown date={new Date('2024-07-13T19:00:00')} daysInHours={false} zeroPadDays={true} renderer={renderFunc}/>
    </div>
  )
}

export default CountdownComponent
