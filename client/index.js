import * as React from 'react';
import 'isomorphic-fetch';
import { render } from 'react-dom';
import App from './App';

function renderApp() {
  render(
    <App />,
    document.getElementById('root')
  );
}

renderApp();
