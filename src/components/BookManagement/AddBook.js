import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from 'mdb-react-ui-kit';

function AddBook() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make the API call to add a new book
      await axios.post('http://127.0.0.1:8000/book', formData);
      setFormData({
        title: '',
        author: '',
        isbn: '',
        quantity: '',
      });
      toast.success("  book added");
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Error adding book:', error);
      
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', marginLeft: '100px', marginRight: '100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <MDBCardBody className='p-5 text-center' style={{ marginTop: '-20px', marginLeft: '100px', marginRight: '100px' }}>
          <h2 className="fw-bold mb-5">Add new Book</h2>
          <form onSubmit={handleFormSubmit}>
            <MDBRow>
              <MDBCol col='4'>
                <MDBInput wrapperClass='mb-4' label='Title' id='title' type='text' name='title' value={formData.title} onChange={handleInputChange} />
              </MDBCol>

              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='Author' id='author' type='text' name='author' value={formData.author} onChange={handleInputChange} />
              </MDBCol>
            </MDBRow>

            <MDBRow>
             

              <MDBCol col='4'>
                <MDBInput wrapperClass='mb-4' label='ISBN' id='isbn' type='text' name='isbn' value={formData.isbn} onChange={handleInputChange} />
              </MDBCol>
              <MDBCol col='4'>
                <MDBInput wrapperClass='mb-4' label='Quantity' id='quantity' type='text' name='quantity' value={formData.quantity} onChange={handleInputChange} />
              </MDBCol>
            </MDBRow>

            <MDBBtn className='w-100 mb-4' size='md' type='submit'>
              Add
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default AddBook;
