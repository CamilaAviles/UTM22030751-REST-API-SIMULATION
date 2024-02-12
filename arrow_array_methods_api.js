let books = [
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "ISBN": "9781408855652",
        "year": 1997,
        "genre": "Fantasy",
        "author": "J.K. Rowling",
        "stock": 10,
        "publisher": "Bloomsbury"
    },
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "ISBN": "9781408855669",
        "year": 1998,
        "genre": "Fantasy",
        "author": "J.K. Rowling",
        "stock": 2,
        "publisher": "Bloomsbury"
    },
    {
        "title": "Cracking the Coding Interview",
        "ISBN": "9780984782857",
        "year": 2015,
        "genre": "Technical",
        "author": "Gayle Laakmann McDowell",
        "stock": 5
    },
    {
        "title": "The Alchemist",
        "ISBN": "9780062315007",
        "year": 1988,
        "genre": "Fantasy",
        "author": "Paulo Coelho",
        "stock": 3,
        "publisher": "HarperOne"
    },
    {
        "title": "Educated",
        "ISBN": "9780399590504",
        "year": 2018,
        "genre": "Memoir",
        "author": "Tara Westover",
        "stock": 7,
        "publisher": "Random House"
    },
    {
        "title": "Sapiens: A Brief History of Humankind",
        "ISBN": "9780062316097",
        "year": 2014,
        "genre": "History",
        "author": "Yuval Noah Harari",
        "stock": 4,
        "publisher": "Harper"
    },
    {
        "title": "Becoming",
        "ISBN": "9781524763138",
        "year": 2018,
        "genre": "Autobiography",
        "author": "Michelle Obama",
        "stock": 6,
        "publisher": "Crown"
    },
    {
        "title": "The Night Circus",
        "ISBN": "9780307744432",
        "year": 2011,
        "genre": "Fantasy",
        "author": "Erin Morgenstern",
        "stock": 5,
        "publisher": "Anchor Books"
    },
    {
        "title": "1984",
        "ISBN": "9780451524935",
        "year": 1949,
        "genre": "Dystopian",
        "author": "George Orwell",
        "stock": 8,
        "publisher": "Plume"
    },
    {
        "title": "The Martian",
        "ISBN": "9780804139021",
        "year": 2014,
        "genre": "Science Fiction",
        "author": "Andy Weir",
        "stock": 5,
        "publisher": "Crown Publishing Group"
    },
    {
        "title": "Where the Crawdads Sing",
        "ISBN": "9780735219090",
        "year": 2018,
        "genre": "Fiction",
        "author": "Delia Owens",
        "stock": 4,
        "publisher": "G.P. Putnam's Sons"
    },
    {
        "title": "Atomic Habits",
        "ISBN": "9780735211292",
        "year": 2018,
        "genre": "Self-help",
        "author": "James Clear",
        "stock": 7,
        "publisher": "Avery"
    },
    {
        "title": "The Power of Now",
        "ISBN": "9781577314806",
        "year": 1997,
        "genre": "Spirituality",
        "author": "Eckhart Tolle",
        "stock": 9,
        "publisher": "New World Library"
    },
    {
        "title": "The Catcher in the Rye",
        "ISBN": "9780316769488",
        "year": 1951,
        "genre": "Fiction",
        "author": "J.D. Salinger",
        "stock": 7,
        "publisher": "Little, Brown and Company"
    },
    {
        "title": "The Great Gatsby",
        "ISBN": "9780743273565",
        "year": 1925,
        "genre": "Fiction",
        "author": "F. Scott Fitzgerald",
        "stock": 8,
        "publisher": "Scribner"
    },
    {
        "title": "To Kill a Mockingbird",
        "ISBN": "9780061120084",
        "year": 1960,
        "genre": "Fiction",
        "author": "Harper Lee",
        "stock": 0,
        "publisher": "HarperPerennial Modern Classics"
    },
    {
        "title": "A Brief History of Time",
        "ISBN": "9780553380163",
        "year": 1988,
        "genre": "Science",
        "author": "Stephen Hawking",
        "stock": 6,
        "publisher": "Bantam"
    },
    {
        "title": "The Four Agreements",
        "ISBN": "9781878424310",
        "year": 1997,
        "genre": "Self-help",
        "author": "Don Miguel Ruiz",
        "stock": 7,
        "publisher": "Amber-Allen Publishing"
    },
    {
        "title": "The Lean Startup",
        "ISBN": "9780307887894",
        "year": 2011,
        "genre": "Business",
        "author": "Eric Ries",
        "stock": 9,
        "publisher": "Crown Business"
    },
    {
        "title": "Thinking, Fast and Slow",
        "ISBN": "9780374533557",
        "year": 2011,
        "genre": "Psychology",
        "author": "Daniel Kahneman",
        "stock": 5,
        "publisher": "Farrar, Straus and Giroux"
    }
  ];
  
//getBook, takes one book title OR ISBN and return it if exists.
const getBook = (titleOrISBN) => ({ code: 200, data: books.find(book => book.title === titleOrISBN || book.ISBN === titleOrISBN) || "Book not found" });
 
//getBooks, return all existing books.
const getBooks = () => ({ code: 200, data: books });
  
//addBook, adds a new book to the books array and return the book created, and the new array, including the new book.
const addBook = (newBook) => {
    books.push(newBook);
    return { code: 201, message: "Book added successfully", data: { book: newBook, books } };
};
  
// removeBookByTitleOrISBN, takes a title OR ISBN and, if found, removes the element from the array, it returns the deleted element and the new array.
const removeBookByTitleOrISBN = (titleOrISBN) => {
    const index = books.findIndex(book => book.title === titleOrISBN || book.ISBN === titleOrISBN);
    return index !== -1 ? { code: 200, message: "Book removed successfully", data: { deletedBook: books.splice(index, 1)[0], books } } : { code: 404, message: "Book not found" };
};

//filterBy, the first param will be the filtering property (genre, author, or publisher), the second will be the string that is being searched. You must return all books that match the condition.
const filterBy = (property, value) => ({ code: 200, data: books.filter(book => book[property] === value) });

//listBooks, return a list of all the books in the next format: Title - Author - Year.
const listBooks = () => ({ code: 200, data: books.map(book => `${book.title} - ${book.author} - ${book.year}`) });

//getBooksByYear, return all books for a given year.
const getBooksByYear = (year) => ({ code: 200, data: books.filter(book => book.year === year) });
  
//genreFullAvailability, return true or false if all books from a given genre have stock available.
const genreFullAvailability = (genre) => ({ code: 200, data: books.every(book => book.genre === genre && book.stock > 0) });
  
//genrePartialAvailability, return true or false if at least ONE book from a given genre has stock availability.
const genrePartialAvailability = (genre) => ({ code: 200, data: books.some(book => book.genre === genre && book.stock > 0) });
  
//getCountBy, the first param will be the counting property (genre, author, or publisher), you must return a new object with the name of the property that you are counting and the counter.
const getCountBy = (property) => ({ code: 200, data: books.reduce((acc, book) => ({ ...acc, [book[property]]: (acc[book[property]] || 0) + 1 }), {}) });
  
console.log(getBook("9780553380163"));
//console.log(getBooks());
//console.log(addBook({ title: "The Power of Now", author: "Eckhart Tolle", isbn: "9781577314806", genre: "Spirituality", year: 1997, publisher: "New World Library", stock: 9 }));
//console.log(removeBookByTitleOrISBN("9780451524935"));
//console.log(filterBy("genre", "Fiction"));
//console.log(listBooks());
//console.log(getBooksByYear(2011));
//console.log(genreFullAvailability("Self-help"));
//console.log(genrePartialAvailability("Self-help"));
//console.log(getCountBy("genre"));
  