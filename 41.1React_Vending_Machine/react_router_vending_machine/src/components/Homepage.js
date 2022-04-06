import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../stylesheets/Homepage.css';
import vendingMachine from '../stylesheets/images/vending_machine.png';

// renders landing page with vending machine image and snack options
const Homepage = () => {
  return (
      <div>
        <img src={vendingMachine} alt="" />
        <h1 className="display-2 mt-2">React Router Vending Machine</h1>
        <div className="button-container">
          <Link to="/">
            <Button color="primary">Home</Button>
          </Link>
          <Link to="/cheetos">
            <Button color="primary">Cheetos</Button>
          </Link>
          <Link to="/flaminHotCheetos">
            <Button color="primary">Flamin' Hot Cheetos</Button>
          </Link>
          <Link to="/hersheys">
            <Button color="primary">Hershey's Bar</Button>
          </Link>
          <Link to="/oreos">
            <Button color="primary">Oreos</Button>
          </Link>
          <Link to="/chocOreos">
            <Button color="primary">Chocolate Oreos</Button>
          </Link>
          <Link to="/jellyBeans">
            <Button color="primary">Jelly Beans</Button>
          </Link>
          <Link to="/reesesMix">
            <Button color="primary">Reese's Mix</Button>
          </Link>
        </div>
      </div>
  );
};

export default Homepage;