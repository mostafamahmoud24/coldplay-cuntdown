import React from 'react'
import "../index.css"

function CountdownDisplayComponent({days, hours, minutes}) {
  return (
    <div className="countdown-display-container">
        <div className="countdown-display-item-container">
            <div className="countdown-display-item">{days}</div>
            <div className="countdown-display-item-seperator"></div>
            <div className="countdown-display-item-label">days</div>
        </div>
        <div className="countdown-display-item-container">
            <div className="countdown-display-item">{hours}</div>
            <div className="countdown-display-item-seperator"></div>
            <div className="countdown-display-item-label">hrs</div>
        </div>
        <div className="countdown-display-item-container">
            <div className="countdown-display-item">{minutes}</div>
            <div className="countdown-display-item-seperator"></div>
            <div className="countdown-display-item-label">mins</div>
        </div>
    </div>
  )
}

export default CountdownDisplayComponent