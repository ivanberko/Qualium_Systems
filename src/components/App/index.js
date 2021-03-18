import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from '../../pages/MainView';
import CartPage from '../../pages/CartView';
import EditCardPage from '../../pages/EditView';
import CreateCardPage from '../../pages/CreateView';
import './App.module.css';

const App = () => {
  return (
    <main className='app'>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/cart' exact component={CartPage} />
        <Route path='/edit' exact component={EditCardPage} />
        <Route path='/create' exact component={CreateCardPage} />
        <Redirect to='/' />
      </Switch>
    </main>
  );
};

export default App;
