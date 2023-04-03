import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import {quiz}from './reducers/quiz'
import { CurrentQuestion } from './components/CurrentQuestion'
import { Status } from './components/Status'
import { Title } from './components/Styles'
import { Summary } from './components/Summery'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  const [buttonStatus, setButtonStatus] = useState(false)
  const onNextQuestion = (status) => {
    setButtonStatus(status)
  }

  return (
    <Provider store={store}>
      <Title> GK Quiz!</Title>
      <CurrentQuestion buttonStatus={buttonStatus} handleNextQuestion={onNextQuestion} />
      <Status handleNextQuestion={onNextQuestion} />
      <Summary handleNextQuestion={onNextQuestion} />
    </Provider>
  )
}
export default App;