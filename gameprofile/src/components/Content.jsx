import React from "react";
import Hero from "./Hero.jsx";
import MyGames from "./MyGames.jsx";
import Milestones from "./Milestones.jsx";
import { Players } from "../data/players.js";

function Content({ user }) {
  // Find the user object by code
  const current = Players.find(p => p.code === user);

  if (!current) return <h2>Invalid User</h2>;

  // Example calculations for Hero stats
  const totalXP = current.games.reduce((acc, g) => acc + (g.hours || 0), 0);
  const streak = current.games.filter(g => g.hours > 100).length; 
  const rating = (streak / current.games.length) * 5; 

  return (
    <section className="content">
      <Hero
        playerName={current.name}
        score={totalXP}
        streak={streak}
        rating={Number(rating.toFixed(1))}
        heroImage={current.heroImage} // dynamic image from Players.js
      />
      <MyGames
        games={current.games}
        playerName={current.name}
        cardClass="blue"
      />
      <Milestones milestones={current.milestones} />
    </section>
  );
}

export default Content;
