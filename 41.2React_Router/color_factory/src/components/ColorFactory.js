import React from 'react';
import useLocalStorage from '../hooks/localStorage';
import Routes from '../Routes';
import { v4 as uuid } from 'uuid';

const ColorFactory = () => {
  const [colors, setColors] = useLocalStorage('colors', [
    { name: 'Red', color: 'red' },
    { name: 'Orange', color: 'orange' },
    { name: 'Yellow', color: 'yellow' },
    { name: 'Green', color: 'green' },
    { name: 'Blue', color: 'blue' },
    { name: 'Indigo', color: 'indigo' },
    { name: 'Violet', color: 'violet' },
  ]);
  const addColor = (newColor) => {
    setColors((colors) => [...colors, { ...newColor, id: uuid() }]);
  };
  return (
    <div className="App">
      <Routes colors={colors} addColor={addColor} />
    </div>
  );
};

export default ColorFactory;