import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../../context';
import CardList from '../../components/ListCards';
import Filter from '../../components/Filter';
import Button from '../../components/Button';

import { fetchProducts } from '../../services/apiServices';

// Styles
import { btnCreate, btnBox, titlePage, cartIcon, btnCart, quantity } from './MainView.module.css';

const MainPage = () => {
  const { page, setPage, products, setProducts, cart } = useContext(Context);

  const handleClickNext = () => {
    setPage(page + 1);
    fetchProducts(page).then(data => setProducts(data));
  };

  const handleClickPrev = () => {
    setPage(page - 1);
    fetchProducts(page).then(data => setProducts(data));
  };

  return (
    <section>
      <h1 className={titlePage}>Main Page </h1>
      <Filter />
      <NavLink to='/cart' className={btnCart}>
        <p className={quantity}>{cart.length}</p>
        <div className={cartIcon}></div>
      </NavLink>
      <NavLink to='/create' className={btnCreate}>
        <Button label={'Create'} />
      </NavLink>
      <CardList />
      <div className={btnBox}>
        <Button label={'< Previous'} handleClick={handleClickPrev} isActive={page === 1 ? true : false} />
        <p>Page {page}</p>
        <Button label={'Next >'} handleClick={handleClickNext} isActive={!products.length ? true : false} />
      </div>
    </section>
  );
};

export default MainPage;
