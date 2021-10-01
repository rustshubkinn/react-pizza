import { useSelector } from 'react-redux';

import Button from 'components/UI/Button/Button';
import Logo from 'components/Logo/Logo';

import { ReactComponent as CartSvg } from '../../img/svg/shopping-cart.svg';

import classes from './Header.module.scss';

const Header = () => {
  const { newOrder } = useSelector((state) => state);

  return (
    <div className={classes.header}>
      <Logo />
      <Button type="button" className={classes.cart_button}>
        <span className={classes.total}>
          {newOrder.orderPrice}
          <span>&#8381;</span>
        </span>
        <span className={classes.cart}>
          <CartSvg className={classes.cart_svg} />
        </span>
      </Button>
    </div>
  );
};

export default Header;
