import React from "react";

const Quiz = ({ quizdata, currQuestion, handleAns, selectedOption, handleNext }) => {
  console.log("seleted= >", selectedOption);
  return (
    <div className="quiz">
      <div className="header">
        <h2>Quiz App</h2>
      </div>
      <div className="quiz-body">
        <h3>
          {" "}
          {currQuestion + 1}.{quizdata[currQuestion].question}
        </h3>
        <div className="options-sec">
          {quizdata[currQuestion].options.map((option, index) => (
            < >
              <button 
                className={`
                            option-btn
                            ${
                              selectedOption
                                ? option === quizdata[currQuestion].answer
                                  ? "correct"
                                  : option === selectedOption
                                  ? "incorrect"
                                  : ""
                                : ""
                            }

                            `}
                onClick={() => handleAns(option)}
                disabled={selectedOption !== null}
                key={index} >
                {option}
              </button>
            </>
          ))}
        </div>
        <div className="quiz-footer">
          <button className="btn-next" onClick={handleNext} disabled = {!selectedOption}>Next</button>
          <p>
            {currQuestion + 1} of {quizdata.length} Question
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
