
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './actions';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)

  const dispatch = useDispatch()
  return (
    <div className="app">
    <h1>Welcome to Redux Session</h1>
    <p> The count is {counter} </p>
     <button onClick={() => dispatch(increment(5))}>+</button>
     <button onClick={() => dispatch(decrement())}>-</button>

     {isLogged && <h3>Some valuble info you should not not see</h3> }

    </div>
  );
}

export default App;
