import "./BookCard.css";

function BookCard({ image, title, author, price }) {
  return (
    <div className="book-card card">
      <img src={image} alt={title} className="book-image" />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <h2 className="price">₹{price}</h2>
      <button className="btn btn-add-cart">Add to Cart</button>
    </div>
  );
}

export default BookCard;
