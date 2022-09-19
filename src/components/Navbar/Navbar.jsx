import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <NavbarMenu />
      <NavbarAuth />
    </div>
  );
};

export default Navbar;
