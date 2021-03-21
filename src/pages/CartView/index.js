import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Context
import Context from '../../context';

// Components
import Cart from '../../components/Cart';

// Styles
import { titlePage, cartIcon, btnCart, quantity, priceTotal } from './CartView.module.css';

const CartPage = () => {
  const { cart } = useContext(Context);
  const totalPrice = cart.reduce((acc, { price, quantity }) => (acc += (price * quantity)), 0);

  return (
    <section>
      <h1 className={titlePage}>Cart Page</h1>
      <NavLink to='/cart' className={btnCart}>
        <p className={quantity}>{cart.length}</p>
        <div className={cartIcon}></div>
      </NavLink>
      <Cart />
      <div className={priceTotal}><span>Total prise:</span> {totalPrice}</div>
    </section>
  );
};

export default CartPage;
