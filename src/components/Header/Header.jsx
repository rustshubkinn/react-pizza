import { node } from 'prop-types';

import Logo from 'components/Logo/Logo';

import classes from './Header.module.scss';

const Header = ({ children }) => (
  <header className={classes.header}>
    <Logo />
    {children}
  </header>
);

Header.propTypes = {
  children: node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
