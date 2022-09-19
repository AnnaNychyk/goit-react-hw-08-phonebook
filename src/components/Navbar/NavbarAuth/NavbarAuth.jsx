import { NavLink } from 'react-router-dom';

import styles from './NavbarAuth.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
  return className;
};

const NavbarAuth = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/register" className={getClassName}>
        Register
      </NavLink>
      |
      <NavLink to="/login" className={getClassName}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
