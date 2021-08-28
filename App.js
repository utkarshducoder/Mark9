import React from "react";
import "./styles.css";
import { useState } from "react";

const booklib = {
  Reallife: [
    { name: "Life is what You Make it", rating: "4.5/5" },
    { name: "Beyond Illusion And Doubt", rating: "3.5/5" }
  ],

  fiction: [
    { name: "Shiva Trilogy", rating: "5/5" },
    { name: "Study in Scarlet", rating: "4.5/5" }
  ],

  LifeStyle: [
    { name: "Rich Dad Poor Dad", rating: "4.5/5" },
    { name: "7 Habbits of Highly Effective People", rating: "4.8/5" }
  ],

  NonFiction: [
    { name: "2 States", rating: "4/5" },
    { name: "Revolution 2020", rating: "4.5/5" }
  ]
};
const movielib = {
  Action: [
    { name: "Avengers", rating: "4.8/5" },
    { name: "Captain Marvel", rating: "4.5/5" },
    { name: "Mission Impossible", rating: "5/5" }
  ],
  Thriller: [
    { name: "Inception", rating: "4.8/5" },
    { name: "Shutter Island", rating: "5/5" }
  ],
  Horror: [
    { name: "The Conjuring", rating: "5/5" },
    { name: "The ring", rating: "4.8/5" },
    { name: "the exorcism of emily rose", rating: "5/5" }
  ],
  Sciencefiction: [
    { name: "Intestellar", rating: "4.5/5" },
    { name: "The Martian", rating: "5/5" },
    { name: "Guardians of Galaxy", rating: "4/5" }
  ]
};

const foodlib = {
  Fastfood: [
    { name: "Pav-Bhaaji", rating: "4.8/5" },
    { name: "Pizza", rating: "5/5" },
    { name: "Burger", rating: "4/5" }
  ],
  Sweets: [
    { name: "Ras-Malayi", rating: "5/5" },
    { name: "Barfi", rating: "4.6/5" },
    { name: "Jalebi", rating: "4.2/5" }
  ],
  MainCourse: [
    { name: "Dosa-Sambhar", rating: "5/5" },
    { name: "Idli-Sambhar", rating: "4.8/5" },
    { name: "Daal-Baati", rating: "5/5" }
  ],
  StreetFood: [
    { name: "Momos", rating: "5/5" },
    { name: "Rolls", rating: "4.6/5" },
    { name: "Gol-Gappey", rating: "4.8/5" },
    { name: "Papdi-Chaat", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedFood, setFood] = useState("Fastfood");
  function getClickky(food) {
    setFood(food);
  }

  const [selectedMovie, setMovie] = useState("Action");
  function getClick(movie) {
    setMovie(movie);
  }
  {
    const [selectedGenre, setGenre] = useState("Reallife");
    function getClickHandler(genre) {
      setGenre(genre);
    }
    return (
      <div className="App">
        <h1>My Library 📚</h1>
        <small>Checkout the list of my favourite books</small>

        <div>
          {Object.keys(booklib).map((genre) => (
            <button
              onClick={() => getClickHandler(genre)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
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
            {booklib[selectedGenre].map((book) => (
              <li
                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}> {book.name} </div>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <hr />

        <h1>My Favourite Movies 🎥</h1>
        <small>Checkout the list of my favourite movies</small>
        <div>
          {Object.keys(movielib).map((movie) => (
            <button
              onClick={() => getClick(movie)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
            >
              {movie}
            </button>
          ))}
        </div>
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {movielib[selectedMovie].map((movie) => (
              <li
                key={movie.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}> {movie.name} </div>
                <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
              </li>
            ))}
          </ul>
        </div>

        <br />
        <hr />

        <h1>My Favourite Food 🍲</h1>
        <small>Checkout the list of my favourite food items</small>
        <div>
          {Object.keys(foodlib).map((food) => (
            <button
              onClick={() => getClickky(food)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
            >
              {food}
            </button>
          ))}
        </div>
        <hr />
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {foodlib[selectedFood].map((food) => (
              <li
                key={food.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}> {food.name} </div>
                <div style={{ fontSize: "smaller" }}> {food.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
