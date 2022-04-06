import React from 'react';
import { NavLink } from 'react-router-dom';
import { dogs } from '../App';
const NavBar = () => {
    // creates link array containg each dogs link
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
          {dog.name}
        </NavLink>
      ));
    return (
    <nav>
        <NavLink exact to="/dogs">Home</NavLink>
          {links}
    </nav>
      );
};

export default NavBar;