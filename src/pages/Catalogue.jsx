import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const CATEGORIES = ["All", "Programming", "Business", "Fiction", "Self Help", "Biography", "Productivity"];

function Catalogue() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/books`);
        if (!response.ok) throw new Error("Failed to fetch books");
        const data = await response.json();
        setBooks(data);
        setError("");
      } catch (err) {
        setError("Unable to load books. Please check your connection and try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    (category === "All" || book.category === category) &&
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Book Catalogue</h2>
        <p className="subtitle">Browse books from different categories.</p>

        {error && <p className="error-message">{error}</p>}

        {!error && (
          <>
            <div className="catalogue-controls">
              <input
                type="text"
                placeholder="Search books..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {loading && <p className="loading-message">Loading books...</p>}

            {!loading && filteredBooks.length > 0 && (
              <div className="books-grid">
                {filteredBooks.map((book) => (
                  <BookCard
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    image={book.image}
                  />
                ))}
              </div>
            )}

            {!loading && filteredBooks.length === 0 && (
              <p className="no-results">No books found. Try adjusting your search or filters.</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Catalogue;
