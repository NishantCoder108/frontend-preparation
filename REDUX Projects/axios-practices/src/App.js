import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [user ,setuser] = useState([]);
const fetchDetails = async() =>{
const users = await axios.get("https://randomuser.me/api")
setuser(users.data.results[0].name)
}

useEffect(() =>{
  fetchDetails()
},[])

console.log(user)
  return (
    <div className="App">
   <h1>Name :{user.title} {user.first} {user.last}</h1>S
    </div>
  );
}

export default App;
