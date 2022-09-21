import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';
// import { getAuthError } from '../redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';

const Login = () => {
  const dispatch = useDispatch();
  // const { status } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <>
      <LoginForm onSubmit={onLogin} />
      {/* {status && <p>User with such email is not registered</p>} */}
    </>
  );
};

export default Login;
