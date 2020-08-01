import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import pagHome from './pages/pagHome';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ pagHome } />
            </Switch>
        </BrowserRouter>
    );
}