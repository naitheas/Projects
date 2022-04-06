import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import oreos from "../../stylesheets/images/oreos.png";

const Oreos = () => {
  return (
    <div>
      <h1>Oreos!</h1>
      <div>
        <img src={oreos} alt="" />
      </div>
      <div className="button-container">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Oreos;