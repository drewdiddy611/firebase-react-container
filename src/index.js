import './views/styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import YFFR_PALETTE from './views/styles/pallete';

import { initAuth } from './auth';
import history from './history';
import configureStore from './store';
import registerServiceWorker from './utils/register-service-worker';
import App from './views/app';

const store = configureStore();
const rootElement = document.getElementById('root');

const defaultTheme = createMuiTheme(YFFR_PALETTE);

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={defaultTheme}>
          <div>
            <Component />
          </div>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./views/app', () => {
    render(require('./views/app').default);
  });
}

registerServiceWorker();

initAuth(store.dispatch)
  .then(() => render(App))
  .catch(error => console.error(error));
