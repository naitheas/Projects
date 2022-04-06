import React from 'react';

import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  const dognames = dogs.map((dog) => dog.name);
  return (
    <div>
      <h1>Dog Finder</h1>
      <ul className="DogList">
        {dognames.map((name) => (
          <Link to={`/dogs/${name.toLowerCase()}`} key={name}>
            <li key={name}>{name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DogList;