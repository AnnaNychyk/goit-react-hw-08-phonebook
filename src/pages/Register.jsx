import { useSelector, useDispatch } from 'react-redux';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from 'redux/auth/auth-operations';
import { getAuthError } from '../redux/auth/auth-selectors';

const Register = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <RegisterForm onSubmit={onRegister} />
      {status && <p>{message}</p>}
    </>
  );
};

export default Register;
