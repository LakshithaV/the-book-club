const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Book Club</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" className="create">
          New Book
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
