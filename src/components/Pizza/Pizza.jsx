import { string, number, arrayOf, objectOf, shape } from 'prop-types';
import classNames from 'classnames';

import OptionsSelector from 'components/OptionsSelector/OptionsSelector';

import classes from './Pizza.module.scss';

const Pizza = ({ name, price, image, options, doughs, sizes, className }) => (
  <div className={classNames(classes.pizza, className)}>
    <img src={image} alt={`${name}`} />
    <p>{name}</p>
    <div className={classes.order_wrapper}>
      <OptionsSelector
        name={name}
        price={price}
        options={options}
        doughs={doughs}
        sizes={sizes}
      />
    </div>
  </div>
);

Pizza.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  image: string.isRequired,
  className: string,
  doughs: arrayOf(string).isRequired,
  sizes: arrayOf(number).isRequired,
  options: objectOf(arrayOf(shape({}))).isRequired,
};

Pizza.defaultProps = {
  className: null,
};

export default Pizza;
