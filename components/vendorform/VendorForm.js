import React from 'react';
import styles from '../../styles/Vendor.module.scss';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Link from 'next/link';
import paths from '../../routes';

export const VendorForm = ({ handleMenuSwitch }) => {
  return (
    <div className={styles.vendor}>
      <div>Welcome Back</div>
      <form>
        <div>
          <Box
            component='form'
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
            noValidate
            autoComplete='off'
            className={styles.formFields}
          >
            <TextField
              fullWidth
              label='Email Address / Store Name'
              variant='outlined'
              size='small'
              required={true}
            />
            <TextField
              fullWidth
              type='password'
              label='Password'
              variant='outlined'
              size='small'
              required
            />
          </Box>
        </div>
        <div className={styles.submit}>
          <button className={styles.button} type='submit'>
            Login
          </button>
          <small>
            No account?{' '}
            <span className={styles.link}>
              <span
                onClick={() => {
                  handleMenuSwitch('signup');
                }}
              >
                Sign up
              </span>
            </span>
          </small>
        </div>
      </form>
    </div>
  );
};
