import React from "react";
import "./styles.css";

import { useState } from "react";
// /logo.84287d09.png

const Music = {
  Jasleen_Royal: [
    { name: "Love you zindegi", rating: "4/5" },
    { name: "Nit Nit", rating: "3.5/5" }
  ],

  Prateek_Kuhad: [
    {
      name: "cold/mess",
      rating: "5/5"
    },
    {
      name: "kasoor",
      rating: "4.5/5"
    }
  ],
  LocalTrain: [
    {
      name: "choo loo",
      rating: "3.5/5"
    },
    {
      name: "aalaas ka pedh",
      rating: "5/5"
    }
  ]
};

export default function App() {
  // Import result is the URL of your image

  const [selectedGenre, setGenre] = useState("Jasleen_Royal");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Ana's Music Recommendation </h1>
      <h3>Music in the soul can be heard by the universe. – Lao Tzu</h3>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite songs by my favorite artist. Select an artist to
        know more
      </p>

      <div>
        {Object.keys(Music).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#F472B6",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {Music[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                color: "#9d174d"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
