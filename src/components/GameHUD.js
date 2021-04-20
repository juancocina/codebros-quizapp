import React from "react";
import ProgressionBar from "./GameProgressionBar";
import "./GameHUD.css";

export default function GameHUD({ score, time, questionNum }) {
  return (
    <div id="gamehud">
      <div className="gamehud-item">
        <p className="prefix">Question {questionNum}/10</p>
        <ProgressionBar max={10} current={questionNum} />
      </div>
      <div className="gamehud-item">
        <p className="prefix">Time</p>
        <h1 className="gamehud-main-text">{time.toFixed(1)}</h1>
      </div>
      <div className="gamehud-item">
        <p className="prefix">Score</p>
        <h1 className="gamehud-main-text">{score.toFixed(0)}</h1>
      </div>
    </div>
  );
}
