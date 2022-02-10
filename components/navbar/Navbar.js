import React, { useState, useEffect } from 'react';
import styles from '../../styles/Navbar.module.scss';
import { Login, Signup, Customer, VendorForm } from '..';
import { fontSize } from '@mui/system';

export const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignUp] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [vendor, setVendor] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const menuReset = () => {
    setLogin(false);
    setSignUp(false);
    setCustomer(false);
    setVendor(false);
  };

  const handleSwitch = (menu) => {
    const menus = {
      signup: () => {
        setSignUp(true);
        setLogin(false);
        setCustomer(false);
        setVendor(false);
      },
      login: () => {
        setLogin(true);
        setSignUp(false);
        setCustomer(false);
        setVendor(false);
      },
    };
    return menus[menu]();
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    offset > 70 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <>
      <nav className={styles.nav} style={{ fontSize: scrolled ? 'large' : 'larger', boxShadow: scrolled && "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <div>
          <span>Dashboard</span>
          <span
            className={vendor && styles.active}
            onMouseEnter={() => {
              menuReset();
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
          <Login handleMenuSwitch={handleSwitch} />
        </div>
      )}

      {signup && (
        <div
          className={styles.signupMenu}
          onMouseLeave={() => {
            setSignUp(!signup);
          }}
        >
          <Signup handleMenuSwitch={handleSwitch} />
        </div>
      )}

      {customer && (
        <div
          className={styles.customerMenu}
          onMouseLeave={() => {
            setCustomer(!customer);
          }}
        >
          <Customer handleMenuSwitch={handleSwitch} />
        </div>
      )}

      {vendor && (
        <div
          className={styles.vendorMenu}
          onMouseLeave={() => {
            setVendor(!vendor);
          }}
        >
          <VendorForm handleMenuSwitch={handleSwitch} />
        </div>
      )}
    </>
  );
};
