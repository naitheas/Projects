import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import cheetos from "../../stylesheets/images/cheetos.png";

const Cheetos = () => {
  return (
    <div>
      <h1>Cheetos!</h1>
      <div>
        <img src={cheetos} alt="" />
      </div>
      <div className="button-container">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cheetos;