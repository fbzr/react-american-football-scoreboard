//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Buttons from "./components/Buttons";
import "./App.css";

function App() {
  const [score, setScore] = useState({
    home: 0,
    away: 0
  });

  const [quarter, setQuarter] = useState(1);

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
  

  const quarterHandler = {
    quarter,
    changeQuarter: () => {
      setQuarter(quarter => quarter < 4 ? quarter + 1 : quarter);
    }
  }

  return (
    <div className="container">
      <Scoreboard score={score} quarterHandler={quarterHandler} />
      <Buttons updateScore={updateScore} quarterHandler={quarterHandler} />
    </div>
  );
}

export default App;
