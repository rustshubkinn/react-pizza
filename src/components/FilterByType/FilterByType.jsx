import { arrayOf, shape, string } from 'prop-types';

import FilterButton from 'components/UI/FilterButton/FilterButton';

import classes from './FilterByType.module.scss';

const FilterByType = ({ types, id }) => {
  const renderTypes = () =>
    types.map((type) => (
      <FilterButton className={classes.filter} key={type.value}>
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
