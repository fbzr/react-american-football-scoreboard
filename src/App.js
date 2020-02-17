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
      <Scoreboard score={score} />
      <Buttons updateScore={updateScore} />
    </div>
  );
}

export default App;
