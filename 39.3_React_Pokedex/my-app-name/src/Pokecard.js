import React from 'react';
import { Card } from 'react-bootstrap';
import './Pokecard.css';

const Pokecard = ({ name,type,exp ,id }) => {
  return (
    <Card className="Pokecard m-3 d-flex flex-column align-items-center">
      <Card.Title className="Pokecard-title text-center fw-bold text-primary pt-2 mt-1">
        {name}
      </Card.Title>
      <Card.Body>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          className="Pokecard-image img-fluid"
        />
        <p className="Pokecard-info text-center">Type: {type}</p>
        <p className="Pokecard-info text-center">EXP: {exp}</p>
      </Card.Body>
    </Card>
  );
};

export default Pokecard;