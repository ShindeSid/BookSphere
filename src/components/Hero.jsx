import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Discover Your
            <br />
            Next Favourite Book
          </h1>
          <p>
            "A reader lives a thousand lives before he dies. The man who never reads lives only one." — George R. R. Martin
          </p>
          <Link to="/catalogue" className="btn">
            Explore Books
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800"
            alt="Books"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
