import useForm from '../../shared/hooks/useForm';

import styles from './LoginForm.module.css';

import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form className={styles.wrapper} action="" onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          User email:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={styles.input}
          type="email"
          placeholder="Enter your user e-mail address"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          User password:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={styles.input}
          type="password"
          placeholder="Enter your user password"
        />
      </div>
      <div className={styles.group}>
        <button className={styles.btn} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
