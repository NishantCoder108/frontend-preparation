import React, { useContext } from 'react'
import { CountContext } from './useReducerContextApi/ContextApi'

function Value() {
    const countContext = useContext(CountContext)
    console.log(countContext.countState)
  return (
    <div>
        <h2>{countContext.countState}</h2>
        <button onClick={() =>countContext.countDispatch("increment")}>Increment</button>
        <button onClick={() =>countContext.countDispatch("decrement")}>Decrement</button>
        <button onClick={() =>countContext.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default Value