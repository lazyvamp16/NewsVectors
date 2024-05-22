import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.formContainer}>
      <form id='form' className={`${styles.form} text-left`}>
        <h2>Contact us</h2>
        <p>I'm the monkey man!</p>
        <MDBInput placeholder='Name' id='name' wrapperClass='mb-4' />
        <MDBInput type='email' placeholder='Email address' id='email' wrapperClass='mb-4' />
        <MDBInput placeholder='Subject' id='subject' wrapperClass='mb-4' />
        <MDBTextArea wrapperClass='mb-4' placeholder='Message' id='message' />
        <MDBCheckbox wrapperClass='d-flex justify-content-left' label='Send me a copy' id='sendCopy' />
        <MDBBtn color='primary' block className='my-4'>
          Send
        </MDBBtn>
      </form>
    </div>
  );
}
export default Contact;
