import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from 'components/LoginForm/LoginForm';
import { login } from 'redux/auth/auth-operations';
import { getAuthError, isAuth } from '../redux/auth/auth-selectors';

const Login = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <LoginForm onSubmit={onLogin} />
      {status && <p>User with such email is not registered</p>}
    </>
  );
};

export default Login;
