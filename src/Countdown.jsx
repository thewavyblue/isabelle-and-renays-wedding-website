import React from "react";
import './Countdown.css';

export default function Countdown() {
    return (
        <div className="countdown">
            <h3>
                Getting married in:
            </h3>
            <div className="wrapper__counter">
                <div className="counter days font__playfair-display">
                    000
                    <span>
                        days
                    </span>
                </div>
                <div className="counter font__playfair-display">
                    :
                </div>
                <div className="counter font__playfair-display">
                    00
                    <span>
                        hours
                    </span>
                </div>
                <div className="counter font__playfair-display">
                    :
                </div>
                <div className="counter font__playfair-display">
                    00
                    <span>
                        mins
                    </span>
                </div>
            </div>
        </div>
    )
}
