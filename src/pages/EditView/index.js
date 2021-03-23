import { useHistory } from 'react-router-dom';

// Components
import FormCard from '../../components/FormCard';

// Styles
import { titlePage, btnGoBack, goBackBox } from './EditView.module.css';

const EditCardPage = () => {
  const history = useHistory();

  return (
    <section>
      <h1 className={titlePage}>Edit Card Page</h1>
      <div className={goBackBox}>
        <button type='button' className={btnGoBack} onClick={history.goBack}>
          Go back
        </button>
      </div>
      <FormCard />
    </section>
  );
};

export default EditCardPage;
