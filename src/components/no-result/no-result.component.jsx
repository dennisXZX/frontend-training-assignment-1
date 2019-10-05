import React from 'react'
import './no-result.styles.css'

const NoResult = ({ isNoResult, message }) => {
  return isNoResult ? <h1 className='no-result'>{message}</h1> : null;
}

export default NoResult
