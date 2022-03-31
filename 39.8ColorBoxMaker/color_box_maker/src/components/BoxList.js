import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

const BoxList = () => {
  const INITIAL_STATE = [
    {
      color: 'blue',
      width: 500,
      height: 300,
      id: uuid(),
    },
    {
      color: 'red',
      width: 200,
      height: 400,
      id: uuid(),
    },
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const remove = (box) => {
    setBoxes(boxes.filter((b) => b !== box));
  };
  return (
    <div className="BoxList">
      <h1>Colored Boxes!</h1>
      <NewBoxForm addBox={addBox} />
      <div className="BoxList-container">
        {boxes.map((b) => (
          <Box
            color={b.color}
            width={b.width}
            height={b.height}
            key={b.id}
            remove={(evt) => remove(b)}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;