import Header from 'components/Header/Header';

import classes from './Home.module.scss';

const Home = () => (
  <div className={classes.container}>
    <header>
      <Header />
    </header>
  </div>
);

export default Home;
