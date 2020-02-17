import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(900); // 900seconds === 15min

    const convertToString = () => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;

        return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if(seconds === 0) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [seconds]);

    return (
        <div className="timer">{convertToString(seconds)}</div>
    );
}

export default Timer
