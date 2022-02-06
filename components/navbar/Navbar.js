import React from 'react';
import styles from '../../styles/Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <span>Dashboard</span>
        <span>Vendor</span>
        <span>Customer</span>
        <span>Sign up</span>
      </div>
      <div>
        <h4>MYTAILORAPP</h4>
      </div>
      <div>
        <button className={styles.button}>LOGIN</button>
      </div>
    </nav>
  );
};
