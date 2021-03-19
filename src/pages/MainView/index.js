import { NavLink } from 'react-router-dom';
import CardList from '../../components/ListCards';
import Button from '../../components/Button';

const MainPage = () => {
  return (
    <section>
      <h1>Main Page </h1>
      <NavLink to='/create'>
        <Button label={'Create'}/>
      </NavLink>
      <CardList />
    </section>
  );
};

export default MainPage;
