import Header from 'components/Header/Header';
import FilterByType from 'components/FilterByType/FilterByType';
import SortSection from 'components/SortSection/SortSection';
import PizzaList from 'components/PizzaList/PizzaList';
import CartButton from 'components/UI/CartButton/CartButton';

import classes from './Home.module.scss';

const Home = () => (
  <div className={classes.wrapper}>
    <Header>
      <CartButton />
    </Header>
    <main>
      <section className={classes.filter_section}>
        <FilterByType />
        <SortSection />
      </section>
      <PizzaList />
    </main>
  </div>
);

export default Home;
