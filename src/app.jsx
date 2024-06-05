import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen.jsx';
import GameScreen from './components/GameScreen.jsx';
import './App.css';



const App = () => {
  const [goal, setGoal] = useState(10);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [player1CurrentScore, setPlayer1CurrentScore] = useState(0);
  const [player2CurrentScore, setPlayer2CurrentScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = (pointsGoal) => {
    setGoal(pointsGoal);
    setGameStarted(true);
  };

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleRollDice = () => {
    const diceValue1 = rollDice();
    const diceValue2 = rollDice();

    if (diceValue1 === 6 && diceValue2 === 6) {
      if (currentPlayer === 1) {
        setPlayer1CurrentScore(0);
      } else {
        setPlayer2CurrentScore(0);
      }
      switchPlayer();
    } else {
      if (currentPlayer === 1) {
        setPlayer1CurrentScore(player1CurrentScore + diceValue1 + diceValue2);
      } else {
        setPlayer2CurrentScore(player2CurrentScore + diceValue1 + diceValue2);
      }
    }
  };

  const handleHold = () => {
    if (player1CurrentScore >= goal || player2CurrentScore >= goal) {
      alert(`Player ${currentPlayer} wins!`);
      window.location.reload();
    }
    setPlayer1CurrentScore(0);
    setPlayer2CurrentScore(0);
    switchPlayer();
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <OpeningScreen startGame={startGame} />
      ) : (
        <GameScreen
          player1CurrentScore={player1CurrentScore}
          player2CurrentScore={player2CurrentScore}
          handleRollDice={handleRollDice}
          handleHold={handleHold}
        />
      )}
    </div>
  );
};

export default App
