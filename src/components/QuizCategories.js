import React from "react";
import { Link } from "react-router-dom";

import "./QuizCategories.css"

export default function QuizCategories({ setChoice }) {
  return (
    <div className="container--categories">
      <h1>Pick Your Quiz Category!</h1>
      <div>
        <button className="btn" onClick={() => setChoice(18)}>Computer</button>
        <button className="btn" onClick={() => setChoice(9)}>General</button>
        <button className="btn" onClick={() => setChoice(23)}>History</button>
        <button className="btn" onClick={() => setChoice(12)}>Music</button>
        <button className="btn" onClick={() => setChoice(32)}>Cartoons and Animations</button>
        <button className="btn" onClick={() => setChoice(20)}>Mythology</button>
        <button className="btn" onClick={() => setChoice(21)}>Sports</button>
        <button className="btn" onClick={() => setChoice(22)}>Geography</button>
        <button className="btn" onClick={() => setChoice(10)}>Books</button>
        <button className="btn" onClick={() => setChoice(11)}>Movies</button>
      </div>
      <div className="backButton">
      <Link to="/" className="btn">
          Go Back
        </Link>
      </div>
    </div>
  );
}
