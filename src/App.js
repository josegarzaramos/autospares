import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import ProductsList from './pages/ProductsList';
import Product from './pages/Product';
// import Container from './components/common/Container';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex h-max">
        <Sidebar />
        <div className="w-full main-container">
          <Switch>
            <Route path="/productos/nuevo">
              <NewProduct />
            </Route>
            <Route path="/productos/:id" exact>
              <Product />
            </Route>
            <Route path="/productos">
              <ProductsList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
