import { useSelector, useDispatch } from 'react-redux';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from 'redux/auth/auth-operations';
import { getAuthError } from '../redux/auth/auth-selectors';

const Register = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <RegisterForm onSubmit={onRegister} />
      {status && (
        <p
          style={{
            margin: '0 auto',
            marginTop: '10px',
            textAlign: 'center',
            width: '800px',
            color: 'rgb(255, 0, 0)',
          }}
        >
          User with that name already registered
        </p>
      )}
    </>
  );
};

export default Register;
