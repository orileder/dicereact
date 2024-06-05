import React, { useState } from 'react';

const OpeningScreen = ({ startGame }) => {
  const [pointsGoal, setPointsGoal] = useState(10);

  const handleStartGame = () => {
    startGame(pointsGoal);
  };

  return (
    <div id="opening">
      <h1>Welcome to the Dice Game</h1>
      <h3>Instructions:</h3>
      <ul>
        <li>
          In your turn, roll the dice (at least once) and accumulate the result
          in "current".
        </li>
        <li>
          You can roll again or click "hold" to save the points from "current"
          and end the turn.
        </li>
        <li>
          Note! If you get double 6, you will lose all progress from "current"
          and the turn will go to your opponent.
        </li>
        <li>
          If you manage to get to exactly the target score, you win. Otherwise,
          if you pass it, your opponent wins.
        </li>
      </ul>
      <label htmlFor="points">Enter the Points Goal:</label>
      <input
        type="number"
        id="points"
        min="1"
        step="1"
        value={pointsGoal}
        onChange={(e) => setPointsGoal(parseInt(e.target.value, 10))}
      />
      <br />
      <button id="start-game" onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default OpeningScreen;
