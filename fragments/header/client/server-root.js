import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/app';

function serverRender() {
    const html = renderToString(<App />);
    return html;
}

export default serverRender;
