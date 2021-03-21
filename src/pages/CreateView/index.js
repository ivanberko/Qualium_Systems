// Components
import FormCard from '../../components/FormCard';

// Styles
import { titlePage } from './CreateView.module.css';

const CreateCardPage = () => {
  return (
    <section>
      <h1 className={titlePage}>Create Card Page</h1>
      <FormCard />
    </section>
  );
};

export default CreateCardPage;
