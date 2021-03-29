import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Context
import Context from '../../context';

// Components
import Cart from '../../components/Cart';

// Services
import { fetchCart } from '../../services/apiServices';

// Styles
import { titlePage, cartIcon, btnCart, quantity, priceTotal, btnGoBack, goBackBox } from './CartView.module.css';

const CartPage = () => {
  const history = useHistory();
  const { cart, setCart } = useContext(Context);

  useEffect(() => {
    fetchCart().then(data => setCart(data));
  }, []);

  const totalPrice = cart.reduce((acc, { price, quantity }) => (acc += price * quantity), 0);

  return (
    <section>
      <h1 className={titlePage}>Cart Page</h1>
      <div className={goBackBox}>
        <button type='button' className={btnGoBack} onClick={history.goBack}>
          Go back
        </button>
      </div>
      <div className={btnCart}>
        <p className={quantity}>{cart.length}</p>
        <div className={cartIcon}></div>
      </div>
      <Cart />
      <div className={priceTotal}>
        <span>Total prise:</span> {totalPrice}
      </div>
    </section>
  );
};

export default CartPage;
