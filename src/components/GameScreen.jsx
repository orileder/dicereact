import React from 'react';
import Dice from './Dice.jsx';

const GameScreen = ({ player1CurrentScore, player2CurrentScore, handleRollDice, handleHold }) => {
  return (
    <div id="game-screen">
      <div className="playerBoxes">
        <div className="playerOne">
          <h2>Player 1</h2>
          <p>Score: <span id="player1-score">{player1CurrentScore}</span></p>
        </div>
        <div className="controls">
          <button id="roll-dice" onClick={handleRollDice}>Roll Dice</button>
          <button id="hold" onClick={handleHold}>Hold</button>
        </div>
        <div className="playerTwo">
          <h2>Player 2</h2>
          <p>Score: <span id="player2-score">{player2CurrentScore}</span></p>
        </div>
      </div>
      <div id="dice-images">
        <Dice id="dice1" />
        <Dice id="dice2" />
      </div>
    </div>
  );
};

export default GameScreen;
