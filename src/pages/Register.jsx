import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from 'redux/auth/auth-operations';
import { getAuthError, isAuth } from '../redux/auth/auth-selectors';

const Register = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onRegister = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <RegisterForm onSubmit={onRegister} />
      {status && <p>User with that name already registered</p>}
    </>
  );
};

export default Register;
