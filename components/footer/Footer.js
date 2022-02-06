import React from 'react';
import styles from '../../styles/Footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h5>Vendor</h5>
        <p>Dashboard</p>
        <p>Portfolio</p>
        <p>Settings</p>
      </div>
      <div>
        <h5>Customer</h5>
        <p>Dashboard</p>
        <p>Portfolio</p>
      </div>
      <div>
        <h5>Newsletter</h5>
        <p>Blog</p>
        <p>Join the community</p>
      </div>
      <div className={styles.across}>
        <h5>Contact Us</h5>
        <p>Phone</p>
        <p>Number</p>
      </div>
      <div className={styles.bottom}>
        <div>
          Available On:
          <Image
            src='/Google_Play-Badge-Logo.wine.svg'
            alt='google play store'
            width={75}
            height={30}
          />
          <Image
            src='/download-on-the-app-store-apple-4.svg'
            alt='apple store'
            width={100}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
};
