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
      setScore(prevScore => ({
          ...prevScore,
          home: prevScore.home + 7
      }));
  }

  const homeFieldGoal = () => {
      setScore(prevScore => ({
          ...prevScore,
          home: prevScore.home + 3
      }));
  }

  const awayTouchdown = () => {
      setScore(prevScore => ({
          ...prevScore,
          away: prevScore.away + 7
      }));
  }

  const awayFiledGoal = () => {
      setScore(prevScore => ({
          ...score,
          away: score.away + 3
      }));
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
      setQuarter(prevQuarter => prevQuarter < 4 ? prevQuarter + 1 : prevQuarter);
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
