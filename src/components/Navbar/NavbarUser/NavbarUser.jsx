import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';
import styles from './NavbarUser.module.css';
import { logout } from 'redux/auth/auth-operations';

const NavbarUser = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.wrapper}>
      <span>{name}</span>|
      <button className={styles.btn} onClick={onLogout} type="button">
        logout
      </button>
    </div>
  );
};

export default NavbarUser;
