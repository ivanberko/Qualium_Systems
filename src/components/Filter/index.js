import { useContext } from 'react';
import Context from '../../context';
import { sectionFilter, inputFilter } from "./Filter.module.css";

const Filter = () => {
  const { filter, setFilter } = useContext(Context);

  return (
    <section className={sectionFilter}>
      <label>
        Find products by title
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={({ target: { value } }) => setFilter(value)}
          className={inputFilter}
        />
      </label>
    </section>
  );
};

export default Filter;