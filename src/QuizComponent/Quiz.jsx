import React, { useState } from "react";
import "./style.scss";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(false);

  const onClickAnswer = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onClickNext = () => {};
  return (
    <div className="quiz-container">
      <span className="active-question-no">{currentQuestion + 1}</span>
      <span className="totalQuestion">/{questions.length}</span>
      <h1>{question}</h1>
      <ul className="choices-list">
        {choices.map((options, index) => (
          <li
            key={index}
            onClick={() => onClickAnswer(answer, index)}
            className={answerIdx === index ? "selected-answer" : null}
          >
            {options}
          </li>
        ))}
      </ul>
      <div className="footer">
        <button
          className="btn"
          disabled={answerIdx === null}
          onClick={onClickNext}
        >
          {currentQuestion === questions.length - 1 ? "Finished" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
