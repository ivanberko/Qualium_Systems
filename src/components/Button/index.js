// Styles
import { button } from './Button.module.css';

const Button = ({label, handleClick, isActive}) => {
  return (
    <button className={button} type='submit' onClick={handleClick} disabled={isActive}>
      {label}
    </button>
  );
};

export default Button;
