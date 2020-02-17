import React, { useState } from 'react';
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";

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

    return (
        <div className="container">
            <section className="scoreboard">
                <TopRow homeScore={score.home} awayScore={score.away} />
                <BottomRow />
            </section>

            <section className="buttons">
                <div className="homeButtons">
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button onClick={homeTouchdown} className="homeButtons__touchdown">Home Touchdown</button>
                <button onClick={homeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
                </div>
                <div className="awayButtons">
                <button onClick={awayTouchdown} className="awayButtons__touchdown">Away Touchdown</button>
                <button onClick={awayFiledGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
                </div>
            </section>
        </div>
    )
}

export default Scoreboard
