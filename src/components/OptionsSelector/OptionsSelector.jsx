import { arrayOf, number, objectOf, shape, string } from 'prop-types';
import classes from './OptionsSelector.module.scss';

const OptionsSelector = ({ options, doughs, sizes }) => {
  console.log(doughs, sizes);

  const availableDoughs = Object.values(options.doughs).map((res) => res.value);
  const availableSizes = Object.values(options.sizes).map((res) => res.value);

  return (
    <div className={classes.options_wrapper}>
      <div className={classes.options_buttons}>
        {availableDoughs.map((dough) => (
          <button type="button" key={dough}>
            {dough}
          </button>
        ))}
      </div>
      <div className={classes.options_buttons}>
        {availableSizes.map((size) => (
          <button type="button" key={size}>
            {size} см.
          </button>
        ))}
      </div>
    </div>
  );
};

OptionsSelector.propTypes = {
  options: objectOf(arrayOf(shape({}))).isRequired,
  doughs: arrayOf(string).isRequired,
  sizes: arrayOf(number).isRequired,
};

export default OptionsSelector;
