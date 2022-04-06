import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Snacks from './index';
import Homepage from './Homepage';
import NavBar from './NavBar';
import '../stylesheets/VendingMachine.css';

// renders components routes to update DOM
const VendingMachine = () => {
    return(
        <div>
        <BrowserRouter>
            <NavBar />
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/cheetos">
            <Snacks.Cheetos />
            </Route>
            <Route exact path="/flaminHotCheetos">
            <Snacks.FlaminHotCheetos />
            </Route>
            <Route exact path="/hersheys">
            <Snacks.HersheysBar />
            </Route>
            <Route exact path="/oreos">
            <Snacks.Oreos />
            </Route>
            <Route exact path="/chocOreos">
            <Snacks.ChocOreos />
            </Route>
            <Route exact path="/jellyBeans">
            <Snacks.JellyBeans />
            </Route>
            <Route exact path="/reesesMix">
            <Snacks.ReesesMix />
            </Route>
        </BrowserRouter>
        </div>
    );

};
export default VendingMachine;