import React from 'react';
import styles from '../../styles/Signup.module.scss';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Link from 'next/link';
import paths from '../../routes';

export const Signup = ({handleMenuSwitch}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className={styles.signup}>
      <div>Please fill in all spaces to sign up.</div>
      <form onSubmit={handleSubmit}>
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
              label='Name'
              variant='outlined'
              size='small'
              required
            />
            <TextField
              fullWidth
              label='Email'
              variant='outlined'
              size='small'
              required
            />
            <TextField
              fullWidth
              label='Phone Number'
              variant='outlined'
              size='small'
              required
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
            Sign up
          </button>
          <small>
            Already have an account?{' '}
            <span className={styles.link}>
              <span
                onClick={() => {
                  handleMenuSwitch('login');
                }}
              >
                Login
              </span>
            </span>
          </small>
        </div>
      </form>
    </div>
  );
};
