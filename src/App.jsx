import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import BooksList from "./components/BooksList";
import Book from "./components/Book";

function App() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [bookGenres, setBookGenres] = useState([
    {
      value: "Fantastyka",
      id: 1,
    },
    {
      value: "Romans",
      id: 2,
    },
    {
      value: "Thriller",
      id: 3,
    },
    {
      value: "Biografia",
      id: 4,
    },
  ]);

  const [books, setBooks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setBooks([
      ...books,
      {
        title: title,
        genre: bookGenres[genre - 1].value,
      },
    ]);
    console.log(`tytul: ${title}; gatunek ${bookGenres[genre - 1].value} `);
  };
  return (
    <div className="container-fluid">
      <div>
        <h1>Formularz dodawania książki</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-2">
            <label htmlFor="bookTitle">Tytuł książki</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="bookTitle"
              className="form-control"
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="bookGenre">Tytuł książki</label>
            <select
              onChange={(e) => setGenre(e.target.value)}
              className="form-select"
              id="bookGenre"
            >
              <option value=""></option>
              {bookGenres.map((object, key) => {
                return (
                  <option key={key} value={object.id}>
                    {object.value}
                  </option>
                );
              })}
            </select>
          </div>
          <button type="submit" className="btn btn-primary my-2">
            Dodaj książkę
          </button>
        </form>
      </div>
      <BooksList>
        {books.map((object, key) => {
          return <Book key={key} title={object.title} genre={object.genre} />;
        })}
      </BooksList>
    </div>
  );
}

export default App;
