const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
