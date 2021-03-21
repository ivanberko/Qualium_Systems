import { useContext } from 'react';

// Context
import Context from '../../context';

// Components
import Button from '../Button';

// Services
import { updateProducts, deleteProductFromCart, updateCart } from '../../services/apiServices';

// Styles
import {
  cartBox,
  cartPrice,
  cartTitle,
  cartDesc,
  listSubtitle,
  quantityBox,
  increment,
  decrement,
  total
} from './Cart.module.css';

const CardList = () => {
  const { products, setProducts, cart, setCart } = useContext(Context);

  const handleClickDeleteFromCart = id => {
    updateProducts(id, { inCart: false }).then(() =>
      setProducts(products.map(product => (product.id === id ? { ...product, inCart: false } : product)))
    );

    deleteProductFromCart(id).then(() => setCart(cart.filter(product => product.id !== id)));
  };

  const handleClickIncrement = (id, quantity) => {
    updateCart(id, { quantity }).then(() =>
      setCart(cart.map(product => (product.id === id ? { ...product, quantity } : product)))
    );
  };

  const handleClickDecrement = (id, quantity) => {
    if (!quantity) return;
    updateCart(id, { quantity }).then(() =>
      setCart(cart.map(product => (product.id === id ? { ...product, quantity } : product)))
    );
  };

  return cart.length ? (
    <ul>
      {cart.map(({ id, title, description, price, quantity }) => (
        <li key={id} className={cartBox}>
          <div>
            <p className={cartTitle}>
              <span>Title:</span> {title}
            </p>
            <p className={cartDesc}>
              <span>Description:</span> {description}
            </p>
            <p className={cartPrice}>
              <span>Price:</span> {price}
            </p>
            <div className={quantityBox}>
              <span className={decrement} onClick={() => handleClickDecrement(id, quantity - 1)}>
                -1
              </span>
              <p className={total}>{quantity}</p>
              <span className={increment} onClick={() => handleClickIncrement(id, quantity + 1)}>
                +1
              </span>
            </div>
          </div>
          <Button label='Delete' handleClick={() => handleClickDeleteFromCart(id)} />
        </li>
      ))}
    </ul>
  ) : (
    <p className={listSubtitle}>In cart no products !</p>
  );
};

export default CardList;
