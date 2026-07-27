import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "../models/Book.js";

dotenv.config();

const SEED_DATA = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    price: 599,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    description: "Build good habits and break bad ones."
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Business",
    price: 499,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600",
    description: "Learn financial freedom."
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Business",
    price: 699,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600",
    description: "Timeless lessons on wealth, greed, and happiness."
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    category: "Self Help",
    price: 549,
    image: "https://images.unsplash.com/photo-1526243741027-444d633d7365?w=600",
    description: "Train your mind for peace and purpose."
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    price: 899,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600",
    description: "A handbook of agile software craftsmanship."
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Programming",
    price: 950,
    image: "https://images.unsplash.com/photo-1511108690759-009324a90311?w=600",
    description: "Programming best practices and timeless wisdom."
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    price: 650,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600",
    description: "The exclusive biography of Steve Jobs."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    price: 399,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600",
    description: "A journey of dreams and destiny."
  },
  {
    title: "Ikigai",
    author: "Hector Garcia",
    category: "Self Help",
    price: 499,
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600",
    description: "The Japanese secret to a long and happy life."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    price: 720,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600",
    description: "Rules for focused success in a distracted world."
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Book.deleteMany();
    console.log("Cleared existing books");

    const result = await Book.insertMany(SEED_DATA);
    console.log(`✓ Successfully seeded ${result.length} books`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error.message);
    process.exit(1);
  }
};

seedDatabase();