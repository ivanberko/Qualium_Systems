import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Context
import Context from '../../context';

// Components
import MainPage from '../../pages/MainView';
import CartPage from '../../pages/CartView';
import EditCardPage from '../../pages/EditView';
import CreateCardPage from '../../pages/CreateView';

// Services
import { fetchProducts } from '../../services/apiServices';

// Utils
import { findProduct } from '../../utils'

// Styles
import './App.module.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  const filteredProducts = findProduct(filter, products);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        filter,
        setFilter
      }}
    >
      <main className='app'>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/cart' component={CartPage} />
          <Route path='/edit' component={EditCardPage} />
          <Route path='/create' component={CreateCardPage} />
          <Redirect to='/' />
        </Switch>
      </main>
    </Context.Provider>
  );
};

export default App;
