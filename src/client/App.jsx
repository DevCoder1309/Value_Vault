
import axios from 'axios';
import Login from "./Login";
import '../index.css';
import MainPage from "./MainPage";
import './style.css'
import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/home')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])
  return (
  //  <>
  //    <Login users={users}/>
  //  </>
    <MainPage/>
  )
}

export default App;
