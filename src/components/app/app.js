import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../../pages/home';
import NotHome from '../../pages/not-home';
import Header from '../header';

import './app.css';

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Home}
                />
                <Route
                    path="/nothome"
                    exact
                    component={NotHome}
                />
            </Switch>
        </Fragment>

    )
};

export default App;