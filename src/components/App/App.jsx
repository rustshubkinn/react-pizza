import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Cart from 'pages/Cart/Cart';

import './global.scss';
import classes from './App.module.scss';

const App = () => (
  <div className={classes.wrapper}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </div>
);

export default App;
