import React, { useState, useEffect } from "react";
import './Countdown.css';

const CountdownTimer = () => {
    
    // const [eventName, setEventName] = useState("");
    const eventDate = "2026-09-19T12:00:00"
    const [countdownStarted, setCountdownStarted] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        if (countdownStarted) {
            const countdownInterval = setInterval(() => {
                const currentTime = new Date().getTime();
                const eventTime = new Date(eventDate).getTime();
                let remainingTime = eventTime - currentTime;

                if (remainingTime <= 0) {
                    remainingTime = 0;
                    clearInterval(countdownInterval);
                    alert("Test Message: Countdown complete!");
                }

                setTimeRemaining(remainingTime);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [countdownStarted, eventDate]);

    // useEffect(() => {
    //     if (countdownStarted) {
    //         document.title = eventName;
    //     }
    // }, [countdownStarted, eventName]);

    const formatDate = (date) => {
        const options = { month: "long", day: "numeric", year: "numeric" };
        return new Date(date).toLocaleDateString("en-US", options);
    };

    const formatTime = (time) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return (
            <div className="wrapper__counter">
                <div className="counter number font__playfair-display">
                    {days.toString().padStart(3, "0")}
                    <span>
                        days
                    </span>
                </div>
                <div className="counter font__playfair-display">
                    :
                </div>
                <div className="counter number font__playfair-display">
                    {hours.toString().padStart(2, "0")}
                    <span>
                        hours
                    </span>
                </div>
                <div className="counter font__playfair-display">
                    :
                </div>
                <div className="counter number font__playfair-display">
                    {minutes.toString().padStart(2, "0")}
                    <span>
                        mins
                    </span>
                </div>
                <div className="counter font__playfair-display">
                    :
                </div>
                <div className="counter number font__playfair-display">
                    {seconds.toString().padStart(2, "0")}
                    <span>
                        secs
                    </span>
                </div>
            </div>
        )
    }
    
    // const handleStart = () => setCountdownStarted(true);
    // const handleStop = () => setCountdownStarted(false);
    // const handleReset = () => {
    //     setCountdownStarted(false);
    //     setTimeRemaining(0);
    // };

    return (
        <div className="countdown">
            <h3>
                Getting married in:
            </h3>
            {formatTime(timeRemaining)}
        </div>
    );
}     

export default CountdownTimer;
