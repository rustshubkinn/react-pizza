import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pizza from 'components/Pizza/Pizza';

import { fetchAllPizza } from 'redux/actions';

import classes from './PizzaList.module.scss';

const PizzaList = () => {
  const dispatch = useDispatch();
  const { pizza, options, activeFilter } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAllPizza());
  }, [dispatch]);

  const renderPizza = () =>
    pizza.map((data) => (
      <Pizza
        key={data.name}
        pizzaId={data.id}
        image={data.image}
        name={data.name}
        price={data.price}
        type={data.type}
        doughs={data.doughs}
        sizes={data.sizes}
        options={options}
        className={classes.pizza_item}
      />
    ));

  return (
    <section className={classes.wrapper}>
      <h3>{activeFilter} пиццы</h3>
      <ul className={classes.pizza_list}>
        {renderPizza()}
        {renderPizza()}
      </ul>
    </section>
  );
};

export default PizzaList;
