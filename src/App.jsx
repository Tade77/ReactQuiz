import { useState } from "react";
import "./App.css";
import Quiz from "./QuizComponent/Quiz";
import { jsQuiz } from "./data/QuestionsData";

function App() {
  return (
    <div>
      <Quiz questions={jsQuiz.questions} />
    </div>
  );
}

export default App;
