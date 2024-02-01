import React from "react";

export default function NotAvailable({show}) {
  return (
    <h1 className="not-available">
      No {show} avaialble for the selected genre. Please select a different
      genre.
    </h1>
  );
}
