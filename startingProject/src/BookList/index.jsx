/* eslint-disable react/prop-types */
import { books } from "../booksData";
import Book from "../Book"

const BookList = () => {
  return (
    <>
    <h1>Amazon Best Sellers</h1>
    <section className="booklist">
      {books.map((book,index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
      </section>
      </>
  );
};



export default BookList;
