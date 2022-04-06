import React from 'react';
import { Link } from 'react-router-dom';

const ColorDetails = ({ color }) => {
  const style = { backgroundColor: color.color };
  return (
    <div className="ColorDetails" style={style}>
      <div className="ColorDetails-Container">
        <h1>
          Your color is{' '}
          <span style={{ color: color.color }}>{color.name}</span>
        </h1>
        <Link to="/colors">
          <button className="btn btn-primary mt-2">Return to Home Page</button>
        </Link>
      </div>
    </div>
  );
};
export default ColorDetails;