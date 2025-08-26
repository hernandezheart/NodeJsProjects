import React from "react";
import Hero from "./Hero.jsx";
import MyGames from "./MyGames.jsx";
import Milestones from "./Milestones.jsx";
import { Players } from "../data/players.js"; // relative path to players.js

function Content({ user }) {
  // Find the user object by code
  const current = Players.find(p => p.code === user);

  if (!current) return <h2>Invalid User</h2>;

  return (
    <section className="content">
      <Hero />
      <MyGames
        games={current.games}
        playerName={current.name}
        cardClass="blue" // optional, or you can store in Players
      />
      <Milestones  milestones={current.milestones} />
    </section>
  );
}

export default Content;
