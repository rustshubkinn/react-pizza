import Header from 'components/Header/Header';
import FilterByType from 'components/FilterByType/FilterByType';
import SortSection from 'components/SortSection/SortSection';
import PizzaList from 'components/PizzaList/PizzaList';
import CartButton from 'components/UI/CartButton/CartButton';

import classes from './Home.module.scss';

const MOCK_TYPES = [
  {
    value: 'all',
    name: 'Все',
  },
  {
    value: 'meat',
    name: 'Мясные',
  },
  {
    value: 'vegan',
    name: 'Вегетарианские',
  },
  {
    value: 'grill',
    name: 'Гриль',
  },
  {
    value: 'hot',
    name: 'Острые',
  },
  {
    value: 'closed',
    name: 'Закрытые',
  },
];

const MOCK_OPTIONS = [
  {
    value: 1,
    name: 'популярности',
  },
  {
    value: 2,
    name: 'по цене',
  },
  {
    value: 3,
    name: 'по алфавиту',
  },
];

const Home = () => (
  <div className={classes.wrapper}>
    <Header>
      <CartButton />
    </Header>
    <main>
      <section className={classes.filter_section}>
        <FilterByType types={MOCK_TYPES} />
        <SortSection options={MOCK_OPTIONS} />
      </section>
      <PizzaList />
    </main>
  </div>
);

export default Home;
