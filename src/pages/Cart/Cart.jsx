import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PizzaOrder from 'components/PizzaOrder/PizzaOrder';
import Header from 'components/Header/Header';
import Button from 'components/UI/Button/Button';

import { clearCart } from 'redux/actions';

import EmptyCartImg from 'img/shopping-cart-empty.png';
import { ReactComponent as OrderCartSvg } from 'img/svg/order-cart.svg';
import { ReactComponent as DeleteIcon } from 'img/svg/trash-icon.svg';

import classes from './Cart.module.scss';

const Cart = () => {
  const { pizzaInCart, totalPrice } = useSelector((state) => state);
  const dispatch = useDispatch();

  const clearCartHandler = () => dispatch(clearCart());

  const orderRender = pizzaInCart.map((piz) => (
    <PizzaOrder
      key={piz.id}
      id={piz.id}
      image={piz.image}
      name={piz.name}
      price={piz.price}
      quantity={piz.quantity}
    />
  ));

  return (
    <>
      <Header />
      <main>
        {Object.keys(pizzaInCart).length === 0 ? (
          <div className={classes.empty_cart}>
            <b>Корзина пустая 😕</b>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу. <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={EmptyCartImg} alt="Корзина пустая 😕" />
            <Link to="/">
              <Button className={classes.return_black_btn}>
                Вернуться назад
              </Button>
            </Link>
          </div>
        ) : (
          <section className={classes.order_section}>
            <div className={classes.ordering_header}>
              <div className={classes.cart_logo}>
                <OrderCartSvg />
                <b>Корзина</b>
              </div>
              <div className={classes.clear_cart}>
                <DeleteIcon />
                <Button
                  onClick={clearCartHandler}
                  className={classes.clear_btn}
                >
                  Очистить корзину
                </Button>
              </div>
            </div>
            <div className={classes.order}>{orderRender}</div>
            <div className={classes.order_total}>
              <div>
                <p>
                  Всего пицц: <b>{pizzaInCart.length} шт.</b>
                </p>
              </div>
              <div>
                <p>
                  Сумма заказа:
                  <b className={classes.total_price}>
                    {totalPrice}
                    <span>&#8381;</span>
                  </b>
                </p>
              </div>
            </div>
            <div className={classes.order_checkout}>
              <Link to="/">
                <Button className={classes.return_btn}>
                  {' '}
                  Вернуться назад{' '}
                </Button>
              </Link>
              <Button className={classes.checkout_btn}>
                {' '}
                Оплатить сейчас{' '}
              </Button>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default Cart;
