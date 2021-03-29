import { useState, useContext } from 'react';

// Context
import Context from '../../context';

// Services
import { filterProductsByTitle } from '../../services/apiServices';

// Styles
import { sectionFilter, inputFilter } from "./Filter.module.css";

const Filter = () => {
  const [inputValue, setInputValue] = useState('')
  const { setPage, setProducts } = useContext(Context);

  const handleChange = ({ target: {value} })  => {
    setInputValue(value);
    filterProductsByTitle(value).then(data => {
      setPage(1)
      setProducts(data)});
  };

  return (
    <section className={sectionFilter}>
      <label>
        Find products by title
        <input
          type="text"
          name="filter"
          value={inputValue}
          onChange={handleChange}
          className={inputFilter}
        />
      </label>
    </section>
  );
};

export default Filter;
