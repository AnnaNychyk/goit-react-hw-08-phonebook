import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';
import styles from './NavbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div className={styles.wrapper}>
      <span>{name}</span>|<button type="button">logout</button>
    </div>
  );
};

export default NavbarUser;
