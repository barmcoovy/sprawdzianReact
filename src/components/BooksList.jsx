import React from "react";
import Book from "./Book";
const BooksList = ({ booksList }) => {
  return (
    <div className="my-4">
      <h3>Lista książek:</h3>
      {booksList.map((object, key) => {
        return <Book key={key} title={object.title} genre={object.genre} />;
      })}
    </div>
  );
};

export default BooksList;
