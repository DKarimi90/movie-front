import React, {useEffect, useState} from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {GoSignIn, GoPersonAdd, GoSignOut} from 'react-icons/go'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

const Navbar = ( {isLoggedIn, setIsLoggedIn} ) => {
const [nav, setNav] = useState(false)
const [scroll, setScroll] = useState(false)
const [dropDown, setDropDown] = useState(false)
const navigate = useNavigate()
const location = useLocation()

const toggleDrop = () => {
  setDropDown(!dropDown)
}

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

// useEffect(() => {
// setDropDown(!dropDown)
// }, [location])

const handleLogout = () => {
  fetch('http://localhost:3000/logout', {
    method: 'DELETE'
  })
  .then(() => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn', true)
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
            <div className='lg:ml-[32%] flex flex-col'><div className='font-bold text-[var(--primary)] text-2xl md:text-4xl px-2'><Link to="/" onClick={() => window.scrollTo(0, 0)}><span className='text-xs md:text-xl underline font-thin'>The</span>DOCUMENTARY</Link></div><div><h1 className='px-2 text-sm md:text-xl'>JUNCTION SINCE 2023</h1></div></div>
            <div className='hidden sm:flex'>
                {isLoggedIn? '' : (<div className='bg-[var(--primary)] text-white px-2 py-3 rounded mr-4 flex'>
                <NavLink to="/register" className="anchors flex items-center" onClick={() => window.scrollTo(0, 0)}>Register<span className='pl-1'><GoPersonAdd /></span></NavLink>
                <NavLink to="/login" className="anchors flex items-center" onClick={() => window.scrollTo(0, 0)}>Login<span className='pl-1'><GoSignIn /></span></NavLink>
                </div>)}
               
            </div>
             
             {/* MOBILE MENU */}
            <div className='block sm:hidden p-1 m-1 mt-[-1rem] z-20' onClick={handleNav}>
              {nav? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={`absolute left-0 top-0 pt-[2.9rem] block sm:hidden transform-translate duration-700 ease-in-out h-screen bg-slate-100 w-full z-10 ${!nav? 'translate-y-[-120vh]' : 'translate-y-0'}`}>
            <div className='lg:ml-[32%] flex flex-col'><div className='font-bold text-[var(--primary)] text-2xl md:text-4xl px-2'><Link to="/" onClick={() => window.scrollTo(0, 0)}><span className='text-xs md:text-xl underline font-thin'>The</span>DOCUMENTARY</Link></div><div><h1 className='px-2 text-sm md:text-xl'>JUNCTION SINCE 2023</h1></div></div>
            <div className='flex flex-col text-center'>
                <NavLink to="/register" className="mobile-anchors" onClick={handleNav}>Register</NavLink>
                <NavLink to="/login" className="mobile-anchors" onClick={handleNav}>Login</NavLink>
            </div>
            </div>
        </div>
        </div>
        <div className={`w-full h-28  bg-[var(--primary)] ${scroll? 'animate-sub': ''}`}>
        <div className={`w-full h-full flex justify-evenly items-center max-w-[800px] mx-auto relative`}>
        <NavLink to="/" className="sub-anchors" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
        <NavLink to="/about" className="sub-anchors" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
        <NavLink to="/contact" className="sub-anchors" onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
        <div className='text-white' onClick={toggleDrop}>
          {dropDown? (<Link className='flex items-center'>Less<IoIosArrowUp className='mt-1 ml-2'/></Link>) :(<Link className='flex items-center'>More<IoIosArrowDown className='mt-1 ml-2'/></Link>)}
        </div>
        </div>
        </div>
        </div>)}
        {isLoggedIn? (<div className='flex text-[var(--primary)] h-24 items-center w-full bg-white'>
        <div className='flex w-full items-center h-full justify-center '>
          <NavLink to="/movies" className="log-anchors">Movies</NavLink>
          <NavLink to="/news" className="log-anchors">Local News</NavLink>
          <NavLink to="/world" className="log-anchors">World News</NavLink>
          <NavLink to="/publications" className="log-anchors">Publications</NavLink>
        </div>
        <div className='flex flex-col justify-end'>
            <div className='mr-4 text-[var(--danger)]'>Welcome:
              <span className='pl-2 font-bold'>{localStorage.getItem('name')}</span>
            </div>
            <button onClick={handleLogout} className="flex items-center mr-4 justify-end">Logout<span className='ml-2'><GoSignOut /></span></button>
          </div>
        </div>): ''}

        {/* TOGGLED MENU */}
        <div onClick={toggleDrop} >
          {dropDown? (<div className='flex justify-evenly py-5'>
            <div className='flex flex-col px-2'>
              <h1 className='font-bold'>Category</h1>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/world">World</NavLink>
            <NavLink to="/business">Business</NavLink>
            </div>
            <div className='flex flex-col px-2'>
              <h1 className='font-bold'>Category</h1>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/world">World</NavLink>
            <NavLink to="/business">Business</NavLink>
            </div>
            <div className='flex flex-col px-2'>
              <h1 className='font-bold'>Category</h1>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/world">World</NavLink>
            <NavLink to="/business">Business</NavLink>
            </div>
            <div className='flex flex-col px-2'>
              <h1 className='font-bold'>Category</h1>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/world">World</NavLink>
            <NavLink to="/business">Business</NavLink>
            </div>
          </div>) : ''}
        </div>
    </div>
  )
}

export default Navbar