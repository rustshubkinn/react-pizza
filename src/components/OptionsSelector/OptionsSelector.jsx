import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { arrayOf, number, objectOf, shape, string } from 'prop-types';

import Button from 'components/UI/Button/Button';

import { addToCart } from 'redux/actions';

import classes from './OptionsSelector.module.scss';

const OptionsSelector = ({ pizzaId, price, options, doughs, sizes }) => {
  const dispatch = useDispatch();
  const [activeDough, setActiveDough] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const availableDoughs = Object.values(options.doughs).map((res) => res.value);
  const availableSizes = Object.values(options.sizes).map((res) => res.value);

  const orderHandler = () => {
    dispatch(addToCart({ pizzaId }));
  };

  return (
    <div className={classes.selector_wrapper}>
      <div className={classes.options_wrapper}>
        <div className={classes.options_buttons}>
          {availableDoughs.map((dg) => (
            <button
              type="button"
              key={dg}
              onClick={() => setActiveDough(dg)}
              className={classNames({
                [classes.active]: activeDough === dg,
              })}
              disabled={!doughs.includes(dg)}
            >
              {dg}
            </button>
          ))}
        </div>
        <div className={classes.options_buttons}>
          {availableSizes.map((sz) => (
            <button
              type="button"
              key={sz}
              onClick={() => setActiveSize(sz)}
              className={classNames({
                [classes.active]: activeSize === sz,
              })}
              disabled={!sizes.includes(sz)}
            >
              {sz} см.
            </button>
          ))}
        </div>
      </div>
      <div className={classes.order_pizza}>
        <b>
          от {price} <span>&#8381;</span>
        </b>
        <Button onClick={orderHandler} className={classes.add_button}>
          <span>&#65291;</span> Добавить
        </Button>
      </div>
    </div>
  );
};

OptionsSelector.propTypes = {
  pizzaId: string.isRequired,
  price: number.isRequired,
  options: objectOf(arrayOf(shape({}))).isRequired,
  doughs: arrayOf(string).isRequired,
  sizes: arrayOf(number).isRequired,
};

export default OptionsSelector;
