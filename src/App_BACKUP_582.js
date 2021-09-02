import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
<<<<<<< HEAD
import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
=======
//import Dashboard from './pages/Dashboard';
//import NewProduct from './pages/NewProduct';
>>>>>>> c0ef4a2be938e335de0b7e04ae094ec72d8bc257

//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <Router>
        <Navbar />
        <Sidebar />
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
=======
      <Navbar />
      <Sidebar />
>>>>>>> c0ef4a2be938e335de0b7e04ae094ec72d8bc257
    </div>
  );
};

export default App;