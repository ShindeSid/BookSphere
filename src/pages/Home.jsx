import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import BookCard from "../components/BookCard";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/books`);
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data.slice(0, 4));
        setError("");
      } catch (err) {
        setError("Unable to load featured books. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <h2 className="title">Featured Books</h2>
          <p className="subtitle">Bestselling books loved by readers around the world.</p>

          {error && <p className="error-message">{error}</p>}
          {loading && <p className="loading-message">Loading featured books...</p>}

          {!loading && books.length > 0 && (
            <div className="books-grid">
              {books.map((book) => (
                <BookCard
                  key={book._id}
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
