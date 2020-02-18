import React, { useState, useEffect } from 'react'

const Timer = ({changeQuarter}) => {
    const initialTimer = 900; // 900seconds === 15min
    const [seconds, setSeconds] = useState(initialTimer);
    const [isRunning, setIsRunning] = useState(false);


    const convertToString = () => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;

        return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    const toggle = () => setIsRunning(!isRunning);

    const reset = () => {
        setSeconds(initialTimer);
        setIsRunning(false);
    }

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
            if(seconds === 0) {
                clearInterval(interval);
                reset();
                function setQuarter() {
                    changeQuarter();
                }

                setQuarter();
            }
        } else if (!isRunning) {
            clearInterval(interval);
        }
        
        return () => {
            clearInterval(interval);
        }
    }, [seconds, isRunning, changeQuarter]);

    return (
        <div className="timer-container">
            <div className="timer">{convertToString(seconds)}</div>
            <button onClick={toggle}>{isRunning ? 'Pause' : 'Start'}</button>
        </div>
    );
}

export default Timer
