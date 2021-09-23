import { useDispatch } from 'react-redux';
import { arrayOf, shape, string } from 'prop-types';

import FilterButton from 'components/UI/FilterButton/FilterButton';

import { filterPizzaByType } from 'redux/actions/home';

import classes from './FilterByType.module.scss';

const FilterByType = ({ types, id }) => {
  const dispatch = useDispatch();

  const renderTypes = () =>
    types.map((type) => (
      <FilterButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(filterPizzaByType(type));
        }}
        className={classes.filter}
        key={type.value}
      >
        {type.name}
      </FilterButton>
    ));
  return <form id={id}>{renderTypes()}</form>;
};

FilterByType.propTypes = {
  types: arrayOf(shape({})).isRequired,
  id: string.isRequired,
};

export default FilterByType;
