import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import jelly_beans from "../../stylesheets/images/jelly_beans.png";

const JellyBeans = () => {
  return (
    <div>
      <h1>Jelly Beans!</h1>
      <div>
        <img src={jelly_beans} alt="" />
      </div>
      <div className="button-container">
        <Link to="/">
          <Button color="primary">Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default JellyBeans;