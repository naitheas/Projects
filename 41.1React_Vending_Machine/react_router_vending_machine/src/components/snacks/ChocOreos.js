import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import choc_oreos from "../../stylesheets/images/choc_oreos.png";

const ChocOreos = () => {
  return (
    <div>
      <h1>Chocolate Creme Oreos!</h1>
      <div>
        <img src={choc_oreos} alt="" />
      </div>
      <div className="button-container">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ChocOreos;