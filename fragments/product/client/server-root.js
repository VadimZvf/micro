import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import store from './store';
import { features } from './routes';
import App from './app';

async function serverRender(req) {
    const dataRequirements = features
        .filter(route => matchPath(req.url, route)) // filter matching paths
        .map(route => route.component) // map to components
        .filter(comp => comp.fetchData) // check if components have data requirement
        // TODO: how map requested data in client side and server side?
        .map(comp => store.dispatch(comp.fetchData(req.params))); // dispatch data requirement

    await Promise.all(dataRequirements);

    const context = {};
    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    return { html, state: store.getState() };
}

export default serverRender;
