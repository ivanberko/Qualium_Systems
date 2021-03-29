import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Context
import Context from '../../context';

// Components
import MainPage from '../../pages/MainView';
import CartPage from '../../pages/CartView';
import EditCardPage from '../../pages/EditView';
import CreateCardPage from '../../pages/CreateView';

// Styles
import './App.module.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        page,
        setPage
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
