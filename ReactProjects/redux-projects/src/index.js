import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
/*
//State ==> Global State

// ACTIONS
const increment =() => {
  return{
    type :"INCREMENT"
  }
}

const decrement =()=>{
  //returning objects so use {}
  return {
    type:"DECREMENT"
  }
}
// REDUCERS
const counter = (state =0, action)=>{

  switch(action.type){
    case 'INCREMENT': 
          return state + 1 ;
     
    case "DECREMENT" :
          return state -1      
  }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()))



//Dispatch
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())




*/


const store = createStore(allReducers,composeWithDevTools())
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
