import React from "react";

const BooksList = ({ children }) => {
  return (
    <div className="my-4">
      <h3>Lista książek:</h3>
      <div>{children}</div>
    </div>
  );
};

export default BooksList;
