import BookList from "./BookList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: books,
  } = useFetch("http://localhost:8000/books");
  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {books && <BookList books={books} />}
    </div>
  );
};

export default Home;
