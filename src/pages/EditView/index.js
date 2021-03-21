// Components
import FormCard from '../../components/FormCard';

// Styles
import { titlePage } from './EditView.module.css';

const EditCardPage = () => {
  return (
    <section>
      <h1 className={titlePage}>Edit Card Page</h1>
      <FormCard />
    </section>
  );
};

export default EditCardPage;
