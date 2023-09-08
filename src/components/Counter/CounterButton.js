import React from 'react';

const CounterButton = (text, handleClick) => {
  return React.createElement(
    'button',
    {
      onClick: () => handleClick()
    },
    text
  );
}

export default CounterButton;
