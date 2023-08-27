import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import News from "./components/News";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import NewsPage from "./components/NewsPage";
import Contact from "./components/Contact";
import Vision from "./components/Vision";
import History from "./components/History";


function App() {
const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"))
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
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/news" element={<News isLoggedIn={isLoggedIn}/>}/>
          <Route path="/publications" element={<Publications />}/>
          <Route path="/vision" element={<Vision />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/movies" element={<Movies movies={movies} isLoggedIn={isLoggedIn}/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}/>
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="/news/:id" element={<NewsPage setIsLoggedIn={setIsLoggedIn} />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
