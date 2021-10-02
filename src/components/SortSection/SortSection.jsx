import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { arrayOf, shape } from 'prop-types';

import { sortPizza } from 'redux/actions/home';

import { ReactComponent as SortArrow } from 'img/svg/arrow.svg';

import classes from './SortSection.module.scss';

const SortSection = ({ options }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [cuurentSort, setCurrentSort] = useState(1);
  const [isReversed, setIsReversed] = useState(false);
  const [activeOption, setOption] = useState('популярности');

  const handleSortPizza = (option) => {
    setOption(option.name);
    setCurrentSort(option.value);
    dispatch(sortPizza(option.value));
  };

  const handleReverseSort = () => {
    setIsReversed(!isReversed);
    dispatch(sortPizza(cuurentSort, isReversed));
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const renderOptions = () =>
    options.map((option) => (
      <button
        key={option.value}
        type="button"
        onClick={() => handleSortPizza(option)}
        value={option.value}
      >
        {option.name}
      </button>
    ));

  return (
    <div className={classes.wrapper}>
      <button
        className={classes.arrow_btn}
        onClick={handleReverseSort}
        type="button"
      >
        <SortArrow />
      </button>
      <p>Сортировка по:</p>
      <button
        onClick={toggleDropdown}
        className={classes.sort_popup}
        type="button"
      >
        {activeOption}
      </button>
      {isOpen ? (
        <div className={classes.sort_wrapper}>{renderOptions()}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

SortSection.propTypes = {
  options: arrayOf(shape({})).isRequired,
};

export default SortSection;
