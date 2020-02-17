import React from 'react'

const Buttons = ({updateScore}) => {
    const { homeTouchdown, homeFieldGoal, awayTouchdown, awayFiledGoal } = updateScore;
    return (
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
    )
}

export default Buttons
