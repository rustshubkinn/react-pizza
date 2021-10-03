import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { sortPizza } from 'redux/actions/home';

import { ReactComponent as SortArrow } from 'img/svg/arrow.svg';

import classes from './SortSection.module.scss';

const SortSection = () => {
  const dispatch = useDispatch();
  const { sortOptions } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [cuurentSort, setCurrentSort] = useState(1);
  const [isReversed, setIsReversed] = useState(false);
  const [activeOption, setOption] = useState('популярности');

  const handleSortPizza = (option) => {
    setIsOpen(false);
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
    sortOptions.map((option) => (
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
        className={classNames(classes.arrow_btn, {
          [classes.reversed]: isReversed,
        })}
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

export default SortSection;
