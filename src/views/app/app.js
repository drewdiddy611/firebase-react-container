import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authActions, getAuth } from 'src/auth';
import RequireAuthRoute from '../components/require-auth-route';
import RequireUnauthRoute from '../components/require-unauth-route';
import PLACEHOLDER from './placeholder';
import Header from '../components/header';
import SignInPage from '../pages/sign-in';

const APP_TO_RENDER = appToRender => routerParams => {
  return appToRender ? appToRender(routerParams) : PLACEHOLDER();
};

// <RequireAuthRoute
// authenticated={authenticated}
// exact
// path="/"
// component={APP_TO_RENDER()}
// />

const App = ({ authenticated, signOut }) => (
  <div>
    <main>
      <Header authenticated={authenticated} signOut={signOut} />

      <RequireUnauthRoute
        authenticated={authenticated}
        path="/"
        component={APP_TO_RENDER()}
      />
    </main>
  </div>
);

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
