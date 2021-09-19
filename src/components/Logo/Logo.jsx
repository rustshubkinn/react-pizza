import { Link } from 'react-router-dom';

import { ReactComponent as SvgLogo } from '../../img/svg/logo-pizza.svg';

import classes from './Logo.module.scss';

const Logo = () => (
  <div className={classes.logo}>
    <Link to="/">
      <div className={classes.wrapper}>
        <SvgLogo />
        <div className={classes.text}>
          <h1>React Pizza</h1>
          <h2>самая вкусная пицца во вселенной</h2>
        </div>
      </div>
    </Link>
  </div>
);

export default Logo;
