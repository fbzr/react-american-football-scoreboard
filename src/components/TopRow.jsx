import React from 'react';
import Timer from './Timer';

const TopRow = (props) => {
    const {homeScore, awayScore} = props;
    return (
        <div className="topRow">
            <div className="home">
                <h2 className="home__name">Lions</h2>
                <div className="home__score">{homeScore}</div>
            </div>
            <div className="timer">00:03</div>
            <Timer />
            <div className="away">
                <h2 className="away__name">Tigers</h2>
                <div className="away__score">{awayScore}</div>
            </div>
        </div>
    );
}

export default TopRow
