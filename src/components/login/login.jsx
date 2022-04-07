import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then(console.log);
  };
  return (
    <section className={styles.login}>
      <Header />
      <h1>Login</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={onLogin}>
            Google
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={onLogin}>
            Github
          </button>
        </li>
      </ul>
      <Footer />
    </section>
  );
};

export default Login;
