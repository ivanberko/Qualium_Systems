import { useContext } from 'react';

// Context
import Context from '../../context';

// Components
import Card from '../Card';

// Styles
import { listCard, listSubtitle } from './ListCard.module.css';

const CardList = () => {
  const { products } = useContext(Context);

  return products.length ? (
    <ul className={listCard}>
      {products.map(product => (
        <Card product={product} key={product.id} />
      ))}
    </ul>
  ) : (
    <p className={listSubtitle}>On page no products !</p>
  );
};

export default CardList;
