import React from "react";

const Book = ({ title, genre }) => {
  return (
    <div className="p-4 rounded container-md border border-secondary d-flex flex-column justify-content-start">
      <div>
        <span className="fw-bold">Tytuł: </span>
        <span>{title}</span>
      </div>
      <div>
        <span className="fw-bold">Gatunek: </span>
        <span>{genre}</span>
      </div>
    </div>
  );
};

export default Book;
