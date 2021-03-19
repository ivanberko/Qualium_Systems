import { useContext } from 'react';
import Context from '../../context';
import Card from '../Card';
import {listCard} from './ListCard.module.css'

const CardList = () => {
  const { filteredProducts }  = useContext(Context);

  return (
    <ul className={listCard}>
      {filteredProducts.map(product => (
        <Card product={product} key={product.id}/>
      ))}
    </ul>
  );
};

export default CardList;
