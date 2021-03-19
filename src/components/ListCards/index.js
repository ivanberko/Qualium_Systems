import { useContext } from 'react';
import Context from '../../context';
import Card from '../Card';
import { listCard, listSubtitle } from './ListCard.module.css';

const CardList = () => {
  const { filteredProducts } = useContext(Context);

  return filteredProducts.length ? (
    <ul className={listCard}>
      {filteredProducts.map(product => (
        <Card product={product} key={product.id} />
      ))}
    </ul>
  ) : (
    <p className={listSubtitle}>On page no products !</p>
  );
};

export default CardList;
