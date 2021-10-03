import { useSelector } from 'react-redux';

import Header from 'components/Header/Header';
import FilterByType from 'components/FilterByType/FilterByType';
import SortDropdown from 'components/SortDropdown/SortDropdown';
import PizzaList from 'components/PizzaList/PizzaList';
import CartButton from 'components/UI/CartButton/CartButton';
import Loader from 'components/UI/Loader/Loader';

import classes from './Home.module.scss';

const Home = () => {
  const { loading } = useSelector((state) => state);

  return (
    <div className={classes.wrapper}>
      <Header>
        <CartButton />
      </Header>
      <main>
        <section className={classes.filter_section}>
          <FilterByType />
          <SortDropdown />
        </section>
        <PizzaList />
      </main>
      <Loader loading={loading} />
    </div>
  );
};

export default Home;
