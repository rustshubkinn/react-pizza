import classNames from 'classnames';
import { string } from 'prop-types';

import classes from './FilterButton.module.scss';

const FilterButton = ({ children, className }) => (
  <button type="submit" className={classNames(classes.filter_btn, className)}>
    {children}
  </button>
);

FilterButton.propTypes = {
  children: string.isRequired,
  className: string,
};

FilterButton.defaultProps = {
  className: null,
};

export default FilterButton;
