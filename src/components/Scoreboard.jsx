import React from 'react';
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";

const Scoreboard = ({score, quarterHandler}) => {
    const {home, away} = score;
    const {quarter, changeQuarter} = quarterHandler;
    
    return (
        <section className="scoreboard">
          <TopRow homeScore={home} awayScore={away} changeQuarter={changeQuarter} />
          <BottomRow quarter={quarter} />
        </section>
    )
}

export default Scoreboard
