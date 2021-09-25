import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { arrayOf, shape, string } from 'prop-types';

import { sortPizza } from 'redux/actions/home';

import { ReactComponent as SortArrow } from '../../img/svg/arrow.svg';

import classes from './SortSection.module.scss';

const SortSection = ({ options, id }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeOption, setOption] = useState('популярности');
  const dispatch = useDispatch();

  const renderOptions = () =>
    options.map((option) => (
      <button
        key={option.value}
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setOption(option.name);
          dispatch(sortPizza(option));
        }}
        value={option.value}
      >
        {option.name}
      </button>
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
        {activeOption}
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
