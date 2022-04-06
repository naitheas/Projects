import React from 'react';
import { Link } from 'react-router-dom';


const ColorList = ({ colors }) => {
  return (
    <div className="d-flex ColorList">
      <h1>Your Colors</h1>
      <ul className="ColorList-List">
        {colors.map((color) => (
          <Link to={`/colors/${color.name}`} key={color.name}>
            <li
              className="ColorList-list d-flex justify-content-center text-center"
              key={color.name}
            >
              {color.name}
            </li>
          </Link>
        ))}
      </ul>
      <div>
        <Link to="/new-color">
          <button className="btn btn-success">Add a New Color!</button>
        </Link>
      </div>
    </div>
  );
};

export default ColorList;