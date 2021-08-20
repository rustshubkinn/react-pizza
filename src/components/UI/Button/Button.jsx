/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { node, func, bool, string, oneOfType, arrayOf } from 'prop-types';

import classes from './Button.module.scss';

const Button = ({ children, type, onClick, className, cart }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames(classes.btn, className, {
      [classes.cart]: cart,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  type: string,
  onClick: func,
  className: string,
  cart: bool,
};

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: null,
  className: null,
  cart: null,
};

export default Button;
