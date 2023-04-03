import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { quiz } from '../reducers/quiz'
import { Progress } from './Styles'

export const Status = ({ handleNextQuestion }) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((store) => store.quiz.currentQuestionIndex)

  const nextButton = () => {
    handleNextQuestion(false)
    return dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <section>
      <button type="button" onClick={nextButton}>Next Question</button>
      <Progress>You are on question {currentPage + 1} of 5.</Progress>
    </section>
  )
}