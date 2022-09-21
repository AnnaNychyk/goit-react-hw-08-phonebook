// import { RiContactsLine } from 'react-icons/ri';
import { RiContactsLine } from '@react-icons/all-files/ri/RiContactsLine';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'shared/hooks/useAuth';
import styles from './Navbar.module.css';

const Navbar = () => {
  const isLogin = useAuth();

  return (
    <div className={styles.wrapper}>
      <RiContactsLine className={styles.icon} />
      {isLogin && <NavbarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
