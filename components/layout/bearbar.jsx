/* react */
import { useState } from 'react';

/* next */
import Link from 'next/link';
import { useRouter } from 'next/router';

/* react bootstrap */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from '@/styles/bearbar.module.css';
import ContactForm from '../contact/contact';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const links = [
  { label: 'Home', path: '/' },
  { label: 'All Posts', path: '/posts' },
];

function BearBar() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const toastSuccess = () => {
    toast.success('Thank you for contacting me!');
  };

  const toastError = () => {
    toast.error('Something went wrong...');
  };

  return (
    <Navbar expand="lg" as="nav" className={styles['bg-accent']}>
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      <ContactForm
        show={show}
        setShow={setShow}
        toastSuccess={toastSuccess}
        toastError={toastError}
      />
      <Container>
        <Link href="/" className="navbar-brand fw-bold">
          {`Bear With Me`.toLocaleUpperCase()}
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.label}>
                <Link
                  className={`nav-link ${
                    router.pathname === link.path ? 'active' : ''
                  }`}
                  href={link.path}>
                  {link.label.toLocaleUpperCase()}
                </Link>
              </li>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Button variant="light" onClick={handleOpen}>
          {`Contact`.toLocaleUpperCase()}
        </Button>
      </Container>
    </Navbar>
  );
}

export default BearBar;
