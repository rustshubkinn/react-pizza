import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';

import './global.scss';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
