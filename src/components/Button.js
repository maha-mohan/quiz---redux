import React, { useState, useEffect } from 'react';

const Button = ({ index, questionId, correctIndex, onClick, option, disabled }) => {
  const [borderColor, setBorderColor] = useState('grey')

  useEffect(() => {
    setBorderColor('grey')
  }, [questionId])

  const onAnswerClick = () => {
    onClick();
    if (index === correctIndex) {
      setBorderColor('green')
    } else {
      setBorderColor('red')
    }
  }
  return (
    <button
      disabled={disabled}
      style={{ border: `1px solid ${borderColor}` }}
      onClick={onAnswerClick}
      type="button">
      {option}
    </button>
  )
}
export default Button