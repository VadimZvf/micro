import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Card from '../features/card';
import NotFound from '../features/not-found';

// for server side rendering
export const features = [
    {
        component: Card,
        path: '/product/:id',
        exact: true
    },
    {
        component: NotFound,
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
