import { useDispatch, useSelector } from 'react-redux';
import { arrayOf, shape } from 'prop-types';

import Button from 'components/UI/Button/Button';
import Loader from 'components/UI/Loader/Loader';

import { filterPizzaByType } from 'redux/actions/home';

import classes from './FilterByType.module.scss';

const FilterByType = ({ types }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);

  const handlePizzaFilter = (type) => dispatch(filterPizzaByType(type));

  const renderTypes = () =>
    types.map((type) => (
      <Button
        onClick={() => handlePizzaFilter(type)}
        className={classes.filter_btn}
        key={type.value}
      >
        {type.name}
      </Button>
    ));
  return (
    <div>
      <Loader loading={loading} />
      {renderTypes()}
    </div>
  );
};

FilterByType.propTypes = {
  types: arrayOf(shape({})).isRequired,
};

export default FilterByType;
