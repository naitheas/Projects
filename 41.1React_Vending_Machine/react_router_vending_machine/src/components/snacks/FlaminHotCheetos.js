import React from 'react';
import flamin_hot_cheetos from '../../stylesheets/images/flamin_hot_cheetos.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const FlaminHotCheetos = () => {
  return (
    <div>
      <h1>Flamin' Hot Cheetos!</h1>
      <div>
        <img src={flamin_hot_cheetos} alt="" />
      </div>
      <div className="button-container">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default FlaminHotCheetos;