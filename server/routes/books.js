import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

const validateBookData = (data) => {
  const required = ["title", "author", "category", "price", "image", "description"];
  const missing = required.filter(field => !data[field]);
  return missing.length === 0 ? null : `Missing fields: ${missing.join(", ")}`;
};

router.post("/", async (req, res) => {
  try {
    const validation = validateBookData(req.body);
    if (validation) {
      return res.status(400).json({ message: validation });
    }

    const { title, author, category, price, image, description } = req.body;

    if (isNaN(price) || price <= 0) {
      return res.status(400).json({ message: "Price must be a positive number" });
    }

    const book = new Book({ title, author, category, price, image, description });
    await book.save();

    res.status(201).json({
      message: "Book added successfully",
      book
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add book. Please try again." });
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: "Invalid book ID" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook
    });
  } catch (error) {
    res.status(400).json({ message: "Failed to update book" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete book" });
  }
});

export default router;