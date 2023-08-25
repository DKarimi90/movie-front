import React, {useEffect, useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {GoSignIn, GoPersonAdd, GoSignOut} from 'react-icons/go'

const Navbar = ( {isLoggedIn, setIsLoggedIn} ) => {
const [nav, setNav] = useState(false)
const [scroll, setScroll] = useState(false)
const navigate = useNavigate()


const handleNav = () => {
  setNav(!nav)
}

useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY > 0) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  }
  window.addEventListener("scroll", handleScroll)
 return () => window.removeEventListener("scroll", handleScroll)
}, [])

const handleLogout = () => {
  fetch('http://localhost:3000/logout', {
    method: 'DELETE'
  })
  .then(() => {
    setIsLoggedIn(false)
    navigate('/')
  })
  .catch(err => {
    console.log(err)
  })
}

  return (
    <div className={`w-full h-44 fixed z-10`}>
      {isLoggedIn? '': (<div className='h-full flex flex-col'>
        <div className={`w-full h-full relative bg-white ${scroll? 'animate-nav': ''}`}>
        <div className='w-full h-full flex justify-between items-center'>
            <div className='uppercase font-bold text-[var(--primary)] text-3xl px-2 md:ml-[32%]'><Link to="/">Movie</Link></div>
            <div className='hidden sm:flex'>
                {isLoggedIn? '' : (<div className='bg-[var(--primary)] text-white px-2 py-3 rounded mr-4 flex'>
                <NavLink to="/register" className="anchors flex items-center">Register<span className='pl-1'><GoPersonAdd /></span></NavLink>
                <NavLink to="/login" className="anchors flex items-center">Login<span className='pl-1'><GoSignIn /></span></NavLink>
                </div>)}
               
            </div>
             
             {/* MOBILE MENU */}
            <div className='block sm:hidden pr-3 mt-[-1rem] z-20' onClick={handleNav}>
              {nav? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
            <div className={`absolute left-0 top-0 pt-[2.9rem] block sm:hidden transform-translate duration-700 ease-in-out h-screen bg-slate-100 w-full z-10 ${!nav? 'translate-y-[-100vh]' : 'translate-y-0'}`}>
            <div className='uppercase font-bold text-[var(--primary)] text-3xl px-2'><Link to="/">Movie</Link></div>
            <div className='flex flex-col text-center'>
                <NavLink to="/" className="mobile-anchors" onClick={handleNav}>Home</NavLink>
                <NavLink to="/movies" className="mobile-anchors" onClick={handleNav}>Movies</NavLink>
                <NavLink to="/register" className="mobile-anchors" onClick={handleNav}>Register</NavLink>
                <NavLink to="/login" className="mobile-anchors" onClick={handleNav}>Login</NavLink>
            </div>
            </div>
        </div>
        </div>
        <div className={`w-full h-28  bg-[var(--primary)] ${scroll? 'animate-sub': ''}`}>
        <div className={`w-full h-full flex justify-evenly items-center max-w-[800px] mx-auto relative`}>
        <NavLink to="/" className="sub-anchors">Home</NavLink>
        <NavLink to="/about" className="sub-anchors">About</NavLink>
        <NavLink to="/contact" className="sub-anchors">Contact</NavLink>
        </div>
        </div>
        </div>)}
        {isLoggedIn? (<div className='flex bg-red-400 h-24 items-center w-full'>
        <div className='flex w-full items-center h-full justify-center'>
          <NavLink to="/">Movies</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/publications">Publications</NavLink>
        </div>
        <div className='flex justify-end'>
            <button onClick={handleLogout} className="flex items-center mr-4">Logout<span className='ml-2'><GoSignOut /></span></button>
          </div>
        </div>): ''}
    </div>
  )
}

export default Navbar