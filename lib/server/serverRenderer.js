import React from 'react';
import ReactDomServer from 'react-dom/server';
import { App } from 'components/App';

export const renderIndex = () => ReactDomServer.renderToString(<App />);
