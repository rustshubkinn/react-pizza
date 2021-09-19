import classNames from 'classnames';
import { string, number, arrayOf, objectOf, shape } from 'prop-types';

import OptionsSelector from 'components/OptionsSelector/OptionsSelector';
import Button from 'components/UI/Button/Button';

import classes from './Pizza.module.scss';

const Pizza = ({ name, price, image, options, doughs, sizes, className }) => (
  <div className={classNames(classes.pizza, className)}>
    <img src={image} alt={`${name}`} />
    <p>{name}</p>
    <div className={classes.order_wrapper}>
      <OptionsSelector options={options} doughs={doughs} sizes={sizes} />
      <div className={classes.order_pizza}>
        <b>
          от {price} <span>&#8381;</span>
        </b>
        <Button className={classes.add_button}>
          <span>&#65291;</span> Добавить
        </Button>
      </div>
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
