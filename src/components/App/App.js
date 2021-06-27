import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../../containers/Register/Register';
import UserList from '../../containers/UserList/UserList';

import './App.scss';

const App = () => (
    <React.Fragment>
        <Switch>
            <Route path="/cadastrar" component={Register} />
            <Route path="/" component={UserList} />
        </Switch>
    </React.Fragment>
);

export default App;
