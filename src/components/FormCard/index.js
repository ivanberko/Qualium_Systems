import { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';

// Context
import Context from '../../context';

// Components
import Button from '../Button';

// Services
import { requestAddToProducts, updateProducts } from '../../services/apiServices';

// Styles
import { formCreate, inputForm } from './FormCard.module.css';

const initStateForm = {
  id: '',
  title: '',
  description: '',
  price: '',
  inCart: false
};

const FormCard = ({ history, location: { state } }) => {
  const { products, setProducts } = useContext(Context);
  const [formData, setFormData] = useState(initStateForm);

  useEffect(() => {
    if (state) {
      setFormData({ ...formData, ...state });
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (state) {
      return updateProducts(state.id, { ...formData }).then(() => {
        setProducts(products.map(product => (product.id === state.id ? { ...product, ...formData } : product)));
        history.push('/');
      });
    }

    requestAddToProducts({ ...formData, id: Math.floor(Math.random() * 100000000) }).then(() => {
      history.push('/');
    });
  };

  return (
    <form className={formCreate}>
      <label>
        Title
        <input
          type='text'
          name='title'
          value={formData.title}
          className={inputForm}
          onChange={({ target }) => setFormData({ ...formData, title: target.value })}
        />
      </label>
      <label>
        Price
        <input
          type='number'
          name='price'
          value={formData.price}
          className={inputForm}
          onChange={({ target }) => setFormData({ ...formData, price: +target.value })}
        />
      </label>
      <label>
        Description
        <textarea
          type='text'
          name='description'
          value={formData.description}
          className={inputForm}
          onChange={({ target }) => setFormData({ ...formData, description: target.value })}
        />
      </label>
      <Button label={'Save'} handleClick={handleSubmit} />
    </form>
  );
};

export default withRouter(FormCard);
