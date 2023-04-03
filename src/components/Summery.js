import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const Summary = ({ handleNextQuestion }) => {
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const answers = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()

  const correctAnswers = answers.filter((answer) => {
    return answer.isCorrect === true
  })

  const resetQuiz = () => {
    handleNextQuestion(false)
    return dispatch(quiz.actions.restart())
  }

  return (
    quizOver && (
      <section>
        <div>
          {correctAnswers.length} correct answers out of 5.
        </div>
        <button type="button" onClick={resetQuiz}>Restart Quiz</button>
      </section>
    ))
}