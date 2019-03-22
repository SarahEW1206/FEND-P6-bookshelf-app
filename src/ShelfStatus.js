import React from "react";

export default function ShelfStatus(props) {
  return (
    <div>
      {props.shelf === "currentlyReading" && (
        <p style={{ color: "orange" }}>Currently Reading</p>
      )}

      {props.shelf === "wantToRead" && (
        <p style={{ color: "purple" }}>Want to Read</p>
      )}

      {props.shelf === "read" && <p style={{ color: "green" }}>Read</p>}

      {props.shelf === "none" && <p style={{ color: "black" }}>None</p>}
    </div>
  );
}
