import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import GitHubLogo from '../github-logo';

import './header.css';

const Header = ({ authenticated, signOut }) => (
  <header className="header">
    <ul className="header__actions">
      {authenticated ? (
        <li>
          <Button onClick={signOut}>Sign out</Button>
        </li>
      ) : null}
      <li>
        <a
          className="link link--github"
          href="https://github.com/drewdiddy611/firebase-react-container"
        >
          <GitHubLogo />
        </a>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Header;
