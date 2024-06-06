import React from 'react'

const Quizstart = ({setQStart}) => {
    
   
  
  return (
    <div className='quizStart'>
      <button className='btn-start' onClick={() => setQStart(false)}>Start</button>
    </div>
  )
}

export default Quizstart
