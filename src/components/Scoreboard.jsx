import React, { useState } from 'react';
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import Buttons from "./Buttons";

const Scoreboard = () => {
    const [score, setScore] = useState({
        home: 0,
        away: 0
    });
    
    const homeTouchdown = () => {
        setScore({
            ...score,
            home: score.home + 7
        });
    }

    const homeFieldGoal = () => {
        setScore({
            ...score,
            home: score.home + 3
        });
    }

    const awayTouchdown = () => {
        setScore({
            ...score,
            away: score.away + 7
        });
    }
    
    const awayFiledGoal = () => {
        setScore({
            ...score,
            away: score.away + 3
        });
    }

    const updateScore = {
        homeTouchdown,
        homeFieldGoal,
        awayTouchdown,
        awayFiledGoal
    }


    return (
        <div className="container">
            <section className="scoreboard">
                <TopRow homeScore={score.home} awayScore={score.away} />
                <BottomRow />
            </section>
            <Buttons updateScore={updateScore} />
        </div>
    )
}

export default Scoreboard
