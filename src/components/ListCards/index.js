import { useContext } from 'react';
import Context from '../../context';
import Card from '../Card';
import {listCard} from './ListCard.module.css'

const CardList = () => {
  const { products }  = useContext(Context);

  return (
    <ul className={listCard}>
      {products.map(product => (
        <Card product={product} key={product.id}/>
      ))}
    </ul>
  );
};

export default CardList;
