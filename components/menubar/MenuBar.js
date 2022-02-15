import React, { useState, useEffect } from 'react';
import styles from '../../styles/Navbar.module.scss';
import { Login, Signup, Customer, VendorForm } from '..';
import { fontSize } from '@mui/system';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  OverlayTrigger,
  Popover,
} from 'react-bootstrap';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export const MenuBar = () => {
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

  const added_style = {
    fontSize: scrolled ? 'large' : 'larger',
    boxShadow: scrolled && 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  };

  return (
    <>
      {/* <nav
        className={`row align-items-center ${styles.nav}`}
        style={added_style}
      >
        <div>
          <span>Dashboard</span>
          <span
            className={vendor && styles.active}
            // onMouseEnter={() => {
            //   menuReset();
            //   setVendor(!vendor);
            // }}
          >
            Vendor
          </span>
          <span
            className={customer && styles.active}
            // onMouseEnter={() => {
            //   menuReset();
            //   setCustomer(!customer);
            // }}
          >
            Customer
          </span>
        </div>
        <div>
          <h4>MYTAILORAPP</h4>
        </div>
        <div>
          <span
            className={signup && styles.active}
            onMouseEnter={() => {
              setLogin(!login);
            }}
          >
            Login
          </span>
          <button
            className={styles.button}
            // onMouseEnter={() => {
            //   setLogin(!login);
            // }}
          >
            Sign up
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
      )} */}

      <Navbar
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        sticky='top'
      >
        <Container>
          <Navbar.Brand href='#/'>MyTailorApp</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#dashboard'>Dashboard</Nav.Link>
              <Nav.Link href='#vendors'>Vendors</Nav.Link>
              {/* <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              {/* <Nav.Link href='#login'>Login</Nav.Link> */}
              <OverlayTrigger
                trigger='click'
                placement='bottom'
                overlay={loginMenu}
                rootClose={true}
              >
                <Nav.Link href='#login'>Login</Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
                trigger='click'
                placement='bottom'
                overlay={signupMenu}
                rootClose={true}
              >
                <Nav.Link eventKey={2} href='#sign-up'>
                  Sign Up
                </Nav.Link>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const loginMenu = (
  <Popover>
    {/* <Popover.Header as='h3'>Login Form</Popover.Header> */}
    <Popover.Body>
      <form className='text-center'>
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
              className='my-3'
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
          {/* <div>
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
          </div> */}
        </div>
      </form>
    </Popover.Body>
  </Popover>
);

const signupMenu = (
  <Popover>
    {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
    <Popover.Body>
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
              className='my-3'
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
              className='my-3'
            />
          </Box>
        </div>
        <div className={`text-center ${styles.submit}`}>
          <button className={styles.button} type='submit'>
            Sign up
          </button>
          {/* <div>
            <small>
              Already have an account?{' '}
              <span className={styles.link}>
                <span
                  onClick={() => {
                    // handleMenuSwitch('login');
                  }}
                >
                  Login
                </span>
              </span>
            </small>
          </div> */}
        </div>
      </form>
    </Popover.Body>
  </Popover>
);
