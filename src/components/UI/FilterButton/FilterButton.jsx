import classNames from 'classnames';
import { func, string } from 'prop-types';

import classes from './FilterButton.module.scss';

const FilterButton = ({ children, className, onClick }) => (
  <button
    type="submit"
    onClick={onClick}
    className={classNames(classes.filter_btn, className)}
  >
    {children}
  </button>
);

FilterButton.propTypes = {
  children: string.isRequired,
  onClick: func,
  className: string,
};

FilterButton.defaultProps = {
  onClick: func,
  className: null,
};

export default FilterButton;
