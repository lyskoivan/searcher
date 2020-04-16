import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './styles/main.scss';

import { initStore } from './redux/store';
import App from './components/App';

ReactDOM.render(
  <Provider store={initStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
