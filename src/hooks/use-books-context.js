import { useContext } from 'react';
import BooksContext from '../context/books.js';

function useBooksContext() {
   return useContext(BooksContext);
}

export default useBooksContext;
