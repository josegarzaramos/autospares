import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import ProductsList from './pages/ProductsList';
import Product from './pages/Product';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex h-full">
        <Sidebar />

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
    </Router>
  );
};

export default App;
