import React, { useState, useEffect, Fragment } from 'react'

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

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
            if(seconds === 0) {
                clearInterval(interval);
                changeQuarter();
                setIsRunning(false);
            }
        } else if (!isRunning) {
            clearInterval(interval);
        }
        
        return () => {
            clearInterval(interval);
        };
    }, [seconds, isRunning]);

    return (
        <Fragment>
            <div className="timer">{convertToString(seconds)}</div>
            <button onClick={toggle}>{isRunning ? 'Pause' : 'Start'}</button>
        </Fragment>
    );
}

export default Timer
