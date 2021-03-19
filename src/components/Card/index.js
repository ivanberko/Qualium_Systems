import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../../context';
import Button from '../Button';
import { updateProducts } from '../../services/apiServices';
import { cardBox, cardTitle, cardDesc, cardPrice, btnBox } from './Card.module.css';

const Card = ({ product }) => {
  const { products, setProducts } = useContext(Context);
  const { title, description, price, inCart, id } = product;

  const handleClick = e => {
    updateProducts(id, { inCart: true }).then(() =>
      setProducts(products.map(product => (product.id === id ? { ...product, inCart: true } : product)))
    );
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
        <Button label='Delete' />
        <Button label='Add to cart' handleClick={handleClick} isActive={inCart} />
      </div>
    </li>
  );
};

export default Card;
