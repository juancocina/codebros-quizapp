import React, { useState } from 'react'
import './QuestionComponent.css'

export default function QuestionComp({ question, nxtQuestion }) {
  const [targetClass, setTargetClass]   =   useState('')
  const [chosenAnswer, setChosenAnswer] =   useState(-1)
  const [answerInput, setAnswerInput]   =   useState(false)

  const checkAnswer = chosenAnswer => {
    if (answerInput) return
    setAnswerInput(true)
    setChosenAnswer(chosenAnswer)
    const targetClass = (chosenAnswer === question.answer ? 'correct' : 'incorrect')
    setTargetClass(targetClass)
    const bonus = (chosenAnswer === question.answer ? 10 : 0)
    setTimeout(() => {
      setChosenAnswer(-1)
      setAnswerInput(false)
      nxtQuestion(bonus)
    }, 1000)
  }

  return (
    <div>
      <h2 dangerouslySetInnerHTML = {{ __html: question.question }}></h2>
      { question.answerOptions.map((choice, i) => (
        <div key={i} onClick={() => checkAnswer(i)} className={`choice-container ${chosenAnswer === i && targetClass}`}>
            <p className='choice-prefix'>{i + 1}</p>
            <p className='choice-text' dangerouslySetInnerHTML={{ __html: choice }}></p>
        </div>
      ))}
    </div>
  )
}