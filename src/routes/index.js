import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './../pages/Home/Home'; // home page kje bide strana so naslov i cards
import Rocket from '../pages/Rocket/Rocket'; // strana so detali za raketata koja se koristela vo dadenata misija

const Routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rocket/:rocketId" component={Rocket} />
        </Switch>
    </Router>

)


export default Routing;