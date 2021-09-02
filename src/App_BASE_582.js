import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Sidebar /> */}
        <Link
          to={{
            pathname: '/dashboard',
          }}
        >
          {/* <h1 className="font-bold">Show Products</h1> */}
        </Link>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/products/new">
            <NewProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
