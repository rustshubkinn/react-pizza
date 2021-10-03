import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import Button from 'components/UI/Button/Button';

import { fetchFilterOptions, filterPizzaByType } from 'redux/actions/home';

import classes from './FilterByType.module.scss';

const FilterByType = () => {
  const dispatch = useDispatch();
  const { filterOptions } = useSelector((state) => state);
  const [isActive, setActive] = useState(false);

  const handlePizzaFilter = (type) => {
    setActive(type);
    dispatch(filterPizzaByType(type));
  };

  useEffect(() => {
    dispatch(fetchFilterOptions());
  }, [dispatch]);

  const renderTypes = () =>
    filterOptions.map((type) => (
      <Button
        onClick={() => handlePizzaFilter(type)}
        className={classNames(classes.filter_btn, {
          [classes.active]: isActive === type,
        })}
        key={type.value}
      >
        {type.name}
      </Button>
    ));
  return <div>{renderTypes()}</div>;
};

export default FilterByType;
