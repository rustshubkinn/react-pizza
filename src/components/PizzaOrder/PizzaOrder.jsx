import { useDispatch, useSelector } from 'react-redux';
import { decreasePizza, deletePizza, increasePizza } from 'redux/actions';
import { number, string } from 'prop-types';

import RoundedButton from 'components/UI/RoundedButton/RoundedButton';

import classes from './PizzaOrder.module.scss';

const PizzaOrder = ({ image, name, price, quantity, id }) => {
  const dispatch = useDispatch();
  const { pizzaInCart } = useSelector((state) => state);

  const deletePizzaHandler = () => dispatch(deletePizza(id, pizzaInCart));

  const decreasePizzaHandler = () => {
    if (quantity > 1) {
      dispatch(decreasePizza(id, pizzaInCart));
    } else {
      dispatch(deletePizza(id, pizzaInCart));
    }
  };

  const increasePizzaHandler = () => dispatch(increasePizza(id, pizzaInCart));

  return (
    <li className={classes.pizza_order}>
      <div className={classes.order_info}>
        <img src={image} alt={`${name}`} />
        <div className={classes.order_name}>
          <b>{name}</b>
          <p>тонкое тесто, 100 см.</p>
        </div>
      </div>
      <div className={classes.order_total}>
        <RoundedButton onClick={decreasePizzaHandler}>
          <span>&#8722;</span>
        </RoundedButton>
        <p>{quantity}</p>
        <RoundedButton onClick={increasePizzaHandler}>
          <span>&#43;</span>
        </RoundedButton>
      </div>
      <b className={classes.price}>
        {price * quantity} <span>&#8381;</span>
      </b>
      <RoundedButton
        onClick={deletePizzaHandler}
        className={classes.delete_order_btn}
      >
        <span>&#215;</span>
      </RoundedButton>
    </li>
  );
};

PizzaOrder.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  id: string.isRequired,
  quantity: number.isRequired,
};

export default PizzaOrder;
