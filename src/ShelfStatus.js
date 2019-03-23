import React from "react";

export default function ShelfStatus(props) {
  return (
    <div>
      {props.shelf === "currentlyReading" && (
        <p
          style={{
            color: "orange",
            textAlign: "center"
          }}
        >
          Currently Reading
        </p>
      )}

      {props.shelf === "wantToRead" && (
        <p
          style={{
            color: "purple",
            textAlign: "center"
          }}
        >
          Want to Read
        </p>
      )}

      {props.shelf === "read" && (
        <p
          style={{
            color: "green",
            textAlign: "center"
          }}
        >
          Read
        </p>
      )}

      {props.shelf === "none" && (
        <p
          style={{
            color: "black",
            textAlign: "center"
          }}
        >
          None
        </p>
      )}
    </div>
  );
}
