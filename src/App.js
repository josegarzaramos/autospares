import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
//import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import ProductsList from './pages/ProductsList';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <Switch>
          <Route path="/agregar/producto">
            <NewProduct />
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
