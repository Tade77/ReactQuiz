import React, { useState } from "react";
import "./style.scss";
import { initialStateResult } from "../data/QuestionsData";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(false);
  const [result, setResult] = useState(initialStateResult);
  const [showResult, setShowResult] = useState(null);

  const onClickAnswer = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onClickNext = () => {
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswer + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };
  const onTryAgain = () => {
    setResult(initialStateResult);
    setShowResult(false);
  };
  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
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
        </>
      ) : (
        <>
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
          </div>
          <button onClick={onTryAgain} className="btn">
            Try Again
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
