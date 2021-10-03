import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as CartSvg } from 'img/svg/shopping-cart.svg';

import Button from 'components/UI/Button/Button';

import classes from './CartButton.module.scss';

const CartButton = () => {
  const { orderPrice } = useSelector(({ newOrder }) => newOrder);

  return (
    <Link to="/cart">
      <Button className={classes.cart_button}>
        <span className={classes.total}>
          {orderPrice}
          <span>&#8381;</span>
        </span>
        <span className={classes.cart}>
          <CartSvg className={classes.cart_svg} />
        </span>
      </Button>
    </Link>
  );
};

export default CartButton;
