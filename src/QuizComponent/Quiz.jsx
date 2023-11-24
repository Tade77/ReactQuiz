import React, { useState } from "react";
import "./style.scss";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices, correctAnswer } = questions[currentQuestion];
  return (
    <div className="quiz-container">
      <span className="active-question-no">{currentQuestion + 1}</span>
      <span className="totalQuestion">/{questions.length}</span>
    </div>
  );
};

export default Quiz;
