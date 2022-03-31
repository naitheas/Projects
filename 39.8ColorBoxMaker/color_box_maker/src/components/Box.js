import React from 'react';


const Box = ({ color, width, height, id, remove }) => {
  const style = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${height}px`,
    margin: '1rem',
  };
  return (
    <div className="Box" style={style} id={id} role="figure">
      <button className="Box-btn" onClick={remove}>
        X
      </button>
    </div>
  );
};

export default Box;