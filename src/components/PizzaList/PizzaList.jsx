import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pizza from 'components/Pizza/Pizza';
import Loader from 'components/UI/Loader/Loader';

import { fetchAllPizza } from 'redux/actions/home';

import classes from './PizzaList.module.scss';

const PizzaList = () => {
  const dispatch = useDispatch();
  const { loading, pizza, options } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAllPizza());
  }, [dispatch]);

  return (
    <section className={classes.pizza_lists}>
      <Loader loading={loading} />
      <h3>Все пиццы</h3>
      <div className={classes.lists_wrapper}>
        {pizza.map((data) => (
          <Pizza
            key={data.name}
            image={data.image}
            name={data.name}
            price={data.price}
            type={data.type}
            doughs={data.doughs}
            sizes={data.sizes}
            options={options}
            className={classes.pizza_item}
          />
        ))}
        {pizza.map((data) => (
          <Pizza
            key={data.name}
            image={data.image}
            name={data.name}
            price={data.price}
            doughs={data.doughs}
            sizes={data.sizes}
            options={options}
            className={classes.pizza_item}
          />
        ))}
      </div>
    </section>
  );
};

export default PizzaList;
