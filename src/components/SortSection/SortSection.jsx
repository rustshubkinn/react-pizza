import { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { ReactComponent as SortArrow } from '../../img/arrow.svg';

import classes from './SortSection.module.scss';

const SortSection = ({ options, id }) => {
  const [isActive, setIsActive] = useState(false);

  const renderOptions = () =>
    options.map((option) => (
      <li key={option.value} value={option.value}>
        {option.name}
      </li>
    ));

  const toggleDropdown = () => setIsActive(!isActive);

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      setIsActive(!isActive);
    }
  };

  return (
    <form>
      <button className={classes.arrow_btn} type="submit">
        <SortArrow />
      </button>
      <p>Сортировка по:</p>
      <div
        onClick={toggleDropdown}
        onKeyUp={enterHandler}
        className={classes.sort_popup}
        id={id}
        role="button"
        tabIndex="0"
      >
        популярности
        {isActive ? (
          <div className={classes.sort_wrapper}>{renderOptions()}</div>
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};

SortSection.propTypes = {
  options: arrayOf(shape({})).isRequired,
  id: string.isRequired,
};

export default SortSection;
