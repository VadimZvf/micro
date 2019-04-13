import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../main';

// for server side rendering
export const features = [
    {
        component: Main,
        path: '/',
        exact: false
    }
];

const Routes = () => (
    <Switch>
        {features.map((feature, index) => (
            <Route key={index} path={feature.path} exact={feature.exact} component={feature.component} />
        ))}
    </Switch>
);

export default Routes;
