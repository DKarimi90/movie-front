import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav] = useState(false)
const [scroll, setScroll] = useState(false)


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

  return (
    <div className={`w-full h-44 fixed z-10`}>
      <div className='h-full flex flex-col'>
        <div className={`w-full h-full relative ${scroll? 'animate-nav': ''}`}>
        <div className='w-full h-full max-w-[800px] mx-auto flex justify-between items-center'>
            <div className='uppercase font-bold text-[var(--primary)] text-3xl px-2'><Link to="/">Movie</Link></div>
            <div className='hidden sm:flex'>
                {/* <NavLink to="/" className="anchors">Home</NavLink> */}
                {/* <NavLink to="/movies" className="anchors">Movies</NavLink> */}
                <NavLink to="/register" className="anchors">Register</NavLink>
                <NavLink to="/login" className="anchors">Login</NavLink>
            </div>
            
            
             {/* MOBILE MENU */}
            <div className='block sm:hidden pr-3 mt-[-1rem] z-20' onClick={handleNav}>
              {nav? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
            <div className={`absolute left-0 top-0 pt-[2.9rem] block sm:hidden transform-translate duration-700 ease-in-out h-full bg-slate-100 w-full z-10 ${!nav? 'translate-y-[-100vh]' : 'translate-y-0'}`}>
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
        </div>
    </div>
  )
}

export default Navbar