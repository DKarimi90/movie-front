import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import NewsPage from "./components/pages/NewsPage";
import Contact from "./components/Contact";
import Vision from "./components/Vision";
import History from "./components/History";
import WorldNews from "./components/WorldNews";
import MovieDetails from "./components/pages/MovieDetails";
import Blogs from "./components/pages/Blogs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Business from "./components/pages/Business";
import Help from "./components/Help";



function App() {
const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"))
const [movies, setMovies] = useState([])

const loggedIn = () => {
  setIsLoggedIn(true)
}

const loggedOut = () => {
  setIsLoggedIn(false)
}

const scrollTop = () => {
  window.scrollTo(0, 0)
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
        <ToastContainer position="top-right" autoClose={3000}/>
        <Routes>
          <Route path="/" element={isLoggedIn? (<Navigate to="/movies" />): (<Home scrollTop={scrollTop}/>)}/>
          <Route path="/about" element={<About />}/>
          <Route path="/news" element={<News isLoggedIn={isLoggedIn}/>}/>
          <Route path="/blogs" element={<Blogs isLoggedIn={isLoggedIn}/>}/>
          <Route path="/world" element={<WorldNews isLoggedIn={isLoggedIn}/>}/>
          <Route path="/publications" element={<Publications />}/>
          <Route path="/help" element={<Help />}/>
          <Route path="/business" element={<Business />}/>
          <Route path="/vision" element={<Vision />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/movies" element={<Movies movies={movies} isLoggedIn={isLoggedIn}/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>}/>
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="/news/:index" element={<NewsPage setIsLoggedIn={setIsLoggedIn} />}/>
          <Route path="/movies/:id" element={<MovieDetails setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} scrollTop={scrollTop}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
