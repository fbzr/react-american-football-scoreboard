import React from 'react';
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";

const Scoreboard = ({score}) => {
    const {home, away} = score;
    return (
        <section className="scoreboard">
          <TopRow homeScore={home} awayScore={away} />
          <BottomRow />
        </section>
    )
}

export default Scoreboard
