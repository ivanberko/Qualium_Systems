import { NavLink } from 'react-router-dom';
import CardList from '../../components/ListCards';
import Filter from '../../components/Filter';
import Button from '../../components/Button';

// Styles
import {btnCreate} from './MainView.module.css'

const MainPage = () => {
  return (
    <section>
      <h1>Main Page </h1>
      <Filter />
      <NavLink to='/create' className={btnCreate}>
        <Button label={'Create'}/>
      </NavLink>
      <CardList />
    </section>
  );
};

export default MainPage;
