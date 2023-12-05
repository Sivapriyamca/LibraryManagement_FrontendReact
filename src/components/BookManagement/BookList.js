import React, { useState, useEffect } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function BookList() {

  const [books, setBooks] = useState([]);

  // Function to fetch data from the Django API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/book');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchData();
  }, []); 

  
  const handleDelete = async (id) => {
    
    try {
      await axios.delete(`http://127.0.0.1:8000/book/${id}`);
      // After successful deletion, fetch the updated data
      const response = await axios.get('http://127.0.0.1:8000/book');
      setBooks(response.data);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
  return (
<div className="app-container">
    <div className="top-margin">
    
      <Link to="/Add" className="add-button"> Add New Book</Link>
    </div>
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Title</th>
          <th scope='col'>Author</th>
          <th scope='col'>ISBN</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       
        {books.map((book) => (
          <tr key={book.id}>
            <th scope='row'>{book.title}</th>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.quantity}</td>
            <td>
            <Link to={`/Update/${book.id}`} className="edit-button"> Edit</Link>

            </td>
            <td>
              <button className="delete-button" onClick={() => handleDelete(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
</div>
  );
}
