import React from 'react';
import ColorForm from './ColorForm';

const NewColor = ({ colors, addColor }) => {
  return (
    <div>
      <h1>Add a Color!</h1>
      <ColorForm colors={colors} addColor={addColor} />
    </div>
  );
};

export default NewColor;