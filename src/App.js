import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BooksComponent() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://springdatastoresample-398023.uw.r.appspot.com/findAllBooks')
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
       {/* Heading for the books section */}
      <h1>Books</h1>
      <ul>
        {/* Mapping each book to an individual list item .
         Each book is represented as a list item with a unique key*/}
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BooksComponent;
