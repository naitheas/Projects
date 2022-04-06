import React from 'react';
import hershey from '../../stylesheets/images/hershey.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const HersheysBar = () => {
  return (
    <div>
      <h1>Hershey's Bar!</h1>
      <div>
        <img src={hershey} alt="" />
      </div>
      <div className="button-container">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default HersheysBar;