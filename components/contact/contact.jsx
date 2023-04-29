import { useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const initialContact = {
  name: '',
  email: '',
  message: '',
};

function ContactForm({ show, setShow, toastSuccess, toastError }) {
  const [contact, setContact] = useState(initialContact);
  const [errors, setErrors] = useState(null);

  const handleClose = () => {
    setShow(false);
    setContact(initialContact);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContact((prev) => ({ ...prev, [id]: value }));
  };

  const handleReset = () => {
    setContact(initialContact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/contact', contact)
      .then((res) => {
        toastSuccess();
        setShow(false);
        setErrors(null);
        setContact(initialContact);
      })
      .catch((err) => {
        toastError();
        setErrors(err?.response?.data?.errors);
      });
  };

  return (
    <Modal show={show} onHide={handleClose} className="d-block">
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me, Fozzie Bear</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Your Name:</Form.Label>
            <Form.Control
              type="text"
              value={contact.name}
              onChange={handleChange}
            />
            {errors?.name && (
              <Form.Text className="text-danger">
                {errors.name.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Your Email:</Form.Label>
            <Form.Control
              type="text"
              value={contact.email}
              onChange={handleChange}
            />
            {errors?.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="message" className="mb-3">
            <Form.Label>Your Message:</Form.Label>
            <Form.Control
              as="textarea"
              value={contact.message}
              onChange={handleChange}
            />
            {errors?.message && (
              <Form.Text className="text-danger">
                {errors.message.message}
              </Form.Text>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="reset" variant="outline-primary" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ContactForm;
