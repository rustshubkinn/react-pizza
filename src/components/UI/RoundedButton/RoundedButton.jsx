import { func, node, string } from 'prop-types';
import classNames from 'classnames';

import classes from './RoundedButton.module.scss';

const RoundedButton = ({ children, type, onClick, className }) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    className={classNames(classes.rounded_btn, className)}
  >
    {children}
  </button>
);

RoundedButton.propTypes = {
  children: node,
  type: string,
  onClick: func,
  className: string,
};

RoundedButton.defaultProps = {
  children: null,
  type: 'button',
  onClick: null,
  className: null,
};

export default RoundedButton;
