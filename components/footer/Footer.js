import React from 'react';
import styles from '../../styles/Footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Vendor</h5>
            <p>Dashboard</p>
            <p>Portfolio</p>
            <p>Settings</p>
          </div>
          <div className='col'>
            <h5>Customer</h5>
            <p>Dashboard</p>
            <p>Portfolio</p>
          </div>
          <div className='col'>
            <h5>Newsletter</h5>
            <p>Blog</p>
            <p>Join the community</p>
          </div>
          <div className='col'>
            <h5>Contact Us</h5>
            <p>example@email.com</p>
            <p>+234 xxx xxxx xxx</p>
          </div>
          <div className='col'>
            <div>
              <p> Available On:</p>
            </div>
            <div className='row'>
              {/* <Image
                src='/Google_Play-Badge-Logo.wine.svg'
                alt='google play store'
                width={75}
                height={30}
              /> */}
              <div>Play Store</div>
            </div>
            <div className='row'>
              {/* <Image
                src='/download-on-the-app-store-apple-4.svg'
                alt='apple store'
                width={100}
                height={40}
              /> */}
              <div>Apple Store</div>
            </div>
          </div>
        </div>
        <div className='row text-center'>
          <p> MyTailorApp © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};
