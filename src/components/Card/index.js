import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Context
import Context from '../../context';

// Components
import Button from '../Button';

// Services
import { updateProducts, deleteProduct, requestAddToCart } from '../../services/apiServices';

// Styles
import { cardBox, cardTitle, cardDesc, cardPrice, btnBox } from './Card.module.css';

const Card = ({ product }) => {
  const { products, setProducts, cart, setCart } = useContext(Context);
  const { title, description, price, inCart, id } = product;

  const handleClickAddToCart = () => {
    updateProducts(id, { inCart: true }).then(() =>
      setProducts(products.map(product => (product.id === id ? { ...product, inCart: true } : product)))
    );

    requestAddToCart({ id, title, description, price, quantity: 1 }).then(res => {
      setCart([...cart, res]);
    });
  };

  const handleClickDeleteProd = () => {
    deleteProduct(id).then(() => setProducts(products.filter(product => product.id !== id)));
  };

  return (
    <li className={cardBox}>
      <p className={cardTitle}>
        <span>Title:</span> {title}
      </p>
      <p className={cardDesc}>
        <span>Description:</span> {description}
      </p>
      <p className={cardPrice}>
        <span>Price:</span> {price}
      </p>
      <div className={btnBox}>
        <NavLink to='/edit'>
          <Button label='Edit' />
        </NavLink>
        <Button label='Delete' handleClick={handleClickDeleteProd} />
        <Button label='Add to cart' handleClick={handleClickAddToCart} isActive={inCart} />
      </div>
    </li>
  );
};

export default Card;
