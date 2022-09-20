import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import useAuth from 'shared/hooks/useAuth';
import styles from './Navbar.module.css';

const Navbar = () => {
  const isLogin = useAuth();

  return (
    <div className={styles.wrapper}>
      {isLogin && <NavbarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
