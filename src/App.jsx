import React, { useState } from "react";
import ResultPage from "./components/ResultPage";
import "./index.css";
import Quizstart from "./components/QuizStart";
import Quiz from "./components/Quiz";
import { quizdata } from "./data/quizdata";
import confetti from "canvas-confetti";

const App = () => {
  const [qStart, setQStart] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  //create handle Ans function
  const handleAns = (option) => {
    setSelectedOption(option);
    if (option === quizdata[currQuestion].answer) {
      setScore(score + 10);
    }
  };

  // create handleNext function
  const handleNext = () => {
    if (currQuestion < quizdata.length - 1) {
      setCurrQuestion(currQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
      triggerConfetti();
    }
  };

  //create handleAgain function
  const handleAgain = () => {
    setQStart(true);
    setShowResult(false);
    setSelectedOption(null);
    setScore(0);
    setCurrQuestion(0);
  };

  //create triggerConfeti function
  const triggerConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });
  };
  
  
  if (qStart) {
    return <Quizstart setQStart={setQStart} />;
  }
  return (
    <>
      {showResult ? (
        <ResultPage
          score={score}
          quizdata={quizdata}
          handleAgain={handleAgain}
        />
      ) : (
        <Quiz
          quizdata={quizdata}
          currQuestion={currQuestion}
          handleAns={handleAns}
          selectedOption={selectedOption}
          handleNext={handleNext}
        />
      )}
    </>
  );
};

export default App;
