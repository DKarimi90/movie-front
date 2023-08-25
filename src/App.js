import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";


function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [movies, setMovies] = useState([])

const loggedIn = () => {
  setIsLoggedIn(true)
}

const loggedOut = () => {
  setIsLoggedIn(false)
}

useEffect(() => {
  fetch('http://localhost:3000/movies')
  .then(res => {
    if(res.ok) {
      return res.json()
    }
  })
  .then(data => {
    console.log(data)
    setMovies(data)
  })
}, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/movies" element={<Movies movies={movies}/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}/>
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
