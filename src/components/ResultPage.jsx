import React from 'react'

const ResultPage = ({score, quizdata, handleAgain}) => {
  return (
    <div className='result'>
      <h1 className='result-title'>{score > 20 ? 'Congratulation' : 'Best of Luck'}</h1>
      <div className="score">
        <span className='getScore'>{score}</span>
        <span className='totalScore'> of {quizdata.length * 10 }</span>
        </div>
        <button className='btn-start btn-res' onClick={handleAgain}>Try Again</button>
    </div>
  )
}

export default ResultPage
