import Header from 'components/Header/Header';
import FilterSection from 'components/FilterSection/FilterSection';

import classes from './Home.module.scss';

const Home = () => (
  <div className={classes.container}>
    <header>
      <Header />
    </header>
    <main>
      <FilterSection />
    </main>
  </div>
);

export default Home;
