import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import reeses_mix from "../../stylesheets/images/reeses_mix.png";

const ReesesMix = () => {
  return (
    <div>
      <h1>Reese's Snack Mix!</h1>
      <div>
        <img src={reeses_mix} alt="" />
      </div>
      <div className="button-container">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ReesesMix;