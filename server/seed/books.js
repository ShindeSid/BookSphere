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
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business",
    price: 599,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    description: "How today's entrepreneurs use continuous innovation to build radically successful businesses."
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business",
    price: 549,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600",
    description: "Notes on startups, or how to build the future."
  },
  {
    title: "Design Patterns",
    author: "Erich Gamma",
    category: "Programming",
    price: 999,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    description: "Elements of reusable object-oriented software."
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "Programming",
    price: 649,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    description: "A deep dive into the core mechanisms of JavaScript."
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "Programming",
    price: 599,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600",
    description: "A modern introduction to programming."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    price: 449,
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600",
    description: "A gripping tale of racial injustice and childhood innocence in the American South."
  },
  {
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    price: 399,
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=600",
    description: "A dystopian classic about surveillance, truth, and totalitarian control."
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Fiction",
    price: 379,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
    description: "A witty exploration of love, class, and manners in Georgian England."
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    price: 349,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600",
    description: "A tragic story of wealth, love, and the American Dream in the Jazz Age."
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    price: 699,
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=600",
    description: "A brief history of humankind, from the Stone Age to the present."
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    category: "History",
    price: 649,
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=600",
    description: "The fates of human societies, explained through geography and biology."
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    category: "History",
    price: 349,
    image: "https://images.unsplash.com/photo-1509266272358-7701da638078?w=600",
    description: "The powerful wartime diary of a young girl in hiding during the Holocaust."
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    price: 599,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600",
    description: "From the Big Bang to black holes, a landmark exploration of the universe."
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Science",
    price: 649,
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600",
    description: "A journey through the universe and humanity's place within it."
  },
  {
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    category: "Science",
    price: 599,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600",
    description: "A gene's-eye view of evolution that reshaped modern biology."
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    price: 499,
    image: "https://images.unsplash.com/photo-1518744386442-91c53ca3c565?w=600",
    description: "Bilbo Baggins' unexpected journey to reclaim a lost dwarf kingdom."
  },
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    category: "Fantasy",
    price: 599,
    image: "https://images.unsplash.com/photo-1601513237763-4210c2ee1a53?w=600",
    description: "Noble families vie for the Iron Throne in a land of political intrigue."
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    price: 549,
    image: "https://images.unsplash.com/photo-1499332701622-d43d33b8cca8?w=600",
    description: "The legendary tale of Kvothe, told in his own words."
  },
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    category: "Mystery",
    price: 449,
    image: "https://images.unsplash.com/photo-1512045482977-2955b30fea62?w=600",
    description: "A missing wife, a suspicious husband, and a marriage full of secrets."
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "Mystery",
    price: 499,
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600",
    description: "A journalist and a hacker uncover a decades-old family mystery."
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    category: "Mystery",
    price: 399,
    image: "https://images.unsplash.com/photo-1587876931567-564ce588bfbd?w=600",
    description: "Ten strangers, one island, and a killer hiding among them."
  },
  {
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    category: "Biography",
    price: 599,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    description: "The autobiography of a man who led South Africa out of apartheid."
  },
  {
    title: "Educated",
    author: "Tara Westover",
    category: "Biography",
    price: 549,
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600",
    description: "A memoir of a woman who leaves her survivalist family to pursue education."
  },
  {
    title: "Getting Things Done",
    author: "David Allen",
    category: "Productivity",
    price: 499,
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600",
    description: "The art of stress-free productivity."
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    category: "Self Help",
    price: 549,
    image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=600",
    description: "Powerful lessons in personal change and effective living."
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