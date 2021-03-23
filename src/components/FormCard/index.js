import { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';

// Context
import Context from '../../context';

// Components
import Button from '../Button';

// Services
import { requestAddToProducts, updateProducts } from '../../services/apiServices';

// Styles
import { formCreate, inputForm, labelInput } from './FormCard.module.css';

const initStateForm = {
  id: '',
  title: '',
  description: '',
  price: '',
  inCart: false,
  labelUrl: ''
};

const FormCard = ({ history, location: { state } }) => {
  const { products, setProducts } = useContext(Context);
  const [formData, setFormData] = useState(initStateForm);
  const [isActiveForm, setIsActiveForm] = useState(false);

  useEffect(() => {
    if (state) {
      setFormData({ ...formData, ...state });
    }
  }, []);

  useEffect(() => {
    if (formData.title && formData.description && formData.price) {
      return setIsActiveForm(true);
    }

    setIsActiveForm(false)
  }, [formData]);

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
    <form className={formCreate} onSubmit={handleSubmit}>
      <label className={labelInput}>
        Title
        <input
          type='text'
          name='title'
          placeholder='Text'
          value={formData.title}
          className={inputForm}
          onChange={({ target }) => setFormData({ ...formData, title: target.value })}
        />
      </label>
      <label className={labelInput}>
        Price
        <input
          type='text'
          name='price'
          placeholder='Number'
          pattern='\d*[\.+]?\d{1,2}'
          value={formData.price}
          className={inputForm}
          onChange={({ target }) => setFormData({ ...formData, price: target.value })}
        />
      </label>
      <label className={labelInput}>
        Description
        <textarea
          type='text'
          name='description'
          placeholder='Text'
          value={formData.description}
          className={inputForm}
          onChange={({ target }) => setFormData({ ...formData, description: target.value })}
        />
      </label>
      <label className={labelInput}>
        Emblem (url)<span>*optional</span>
        <input
          type='url'
          name='emblem'
          placeholder='https://example.com'
          pattern='https?://.+'
          value={formData.labelUrl}
          className={inputForm}
          onChange={({ target }) => setFormData({ ...formData, labelUrl: target.value })}
        />
      </label>
      <Button label={'Save'} isActive={!isActiveForm} />
    </form>
  );
};

export default withRouter(FormCard);
