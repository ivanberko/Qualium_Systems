import { useHistory } from 'react-router-dom';

// Components
import FormCard from '../../components/FormCard';

// Styles
import { titlePage, btnGoBack, goBackBox } from './CreateView.module.css';

const CreateCardPage = () => {
  const history = useHistory();

  return (
    <section>
      <h1 className={titlePage}>Create Card Page</h1>
      <div className={goBackBox}>
        <button type='button' className={btnGoBack} onClick={history.goBack}>
          Go back
        </button>
      </div>
      <FormCard />
    </section>
  );
};

export default CreateCardPage;
