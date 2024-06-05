import React from 'react';

const Dice = ({ id }) => {
  return (
    <img
      id={id}
      className="dice"
      src={`assets/dice-2.png`}
      alt="Dice"
    />
  );
};

export default Dice
