import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.scss';
import { Login, Signup, Customer, VendorForm } from '..';

export const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignUp] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [vendor, setVendor] = useState(false);

  const menuReset = () => {
    setLogin(false)
    setSignUp(false)
    setCustomer(false)
    setVendor(false)
  }

  return (
    <>
      <nav className={styles.nav}>
        <div>
          <span>Dashboard</span>
          <span
            className={vendor && styles.active}
            onMouseEnter={() => {
              menuReset()
              setVendor(!vendor);
            }}
          >
            Vendor
          </span>
          <span
            className={customer && styles.active}
            onMouseEnter={() => {
              menuReset();
              setCustomer(!customer);
            }}
          >
            Customer
          </span>
          <span
            className={signup && styles.active}
            onMouseEnter={() => {
              menuReset();
              setSignUp(!signup);
            }}
          >
            Sign up
          </span>
        </div>
        <div>
          <h4>MYTAILORAPP</h4>
        </div>
        <div>
          <button
            className={styles.button}
            onMouseEnter={() => {
              setLogin(!login);
            }}
          >
            LOGIN
          </button>
        </div>
      </nav>
      {login && (
        <div
          className={styles.loginMenu}
          onMouseLeave={() => {
            setLogin(!login);
          }}
        >
          <Login />
        </div>
      )}

      {signup && (
        <div
          className={styles.signupMenu}
          onMouseLeave={() => {
            setSignUp(!signup);
          }}
        >
          <Signup />
        </div>
      )}

      {customer && (
        <div
          className={styles.customerMenu}
          onMouseLeave={() => {
            setCustomer(!customer);
          }}
        >
          <Customer />
        </div>
      )}

      {vendor && (
        <div
          className={styles.vendorMenu}
          onMouseLeave={() => {
            setVendor(!vendor);
          }}
        >
          <VendorForm />
        </div>
      )}
    </>
  );
};
