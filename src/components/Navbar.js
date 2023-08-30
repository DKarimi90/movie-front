import React, {useEffect, useState} from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {GoSignIn, GoPersonAdd, GoSignOut} from 'react-icons/go'
import {GrBlog} from 'react-icons/gr'
import {BiSupport} from 'react-icons/bi'
import { Link } from 'react-scroll'
import {IoIosArrowUp} from 'react-icons/io'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = ( {isLoggedIn, setIsLoggedIn, scrollTop} ) => {
const [nav, setNav] = useState(false)
const [scroll, setScroll] = useState(false)
const [dropDown, setDropDown] = useState(false)
const navigate = useNavigate()
const location = useLocation()
const [showButton, setShowButton] = useState(false)

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

useEffect(() => {
  const handleButton = () => {
  const scrollToTop = window.pageYOffset; 
  const threshold = 100; 

  setShowButton(scrollToTop > threshold)
  }
  window.addEventListener('scroll', handleButton)
  return ()=> window.removeEventListener('scroll', handleButton)
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
    toast.success('Successfully Logged Out!', {
      position: 'top-right',
      autoClose: 3000,
    });
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
        <div className='text-white px-6 py-4' onMouseEnter={toggleDrop}>
          {dropDown? (<NavLink className='flex items-center'>Less</NavLink>) :(<Link className='flex items-center'>More</Link>)}
        </div>
        </div>
        </div>
        </div>)}
        {isLoggedIn? (<div className='flex text-[var(--primary)] h-32 items-center w-full bg-white'>
        <div className='flex w-full items-center h-full justify-center flex-col'>
          <div className='w-full ml-[-2rem] sm:ml-0 h-20 md:h-16 lg:14 flex flex-col lg:flex-row lg:justify-center border max-w-[310px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] border-black items-center'>
            <div className='w-full flex lg:justify-end'>
              <p className='underline text-sm pl-2'>The</p> <span className='font-bold text-[var(--danger)] px-2 text-sm lg:text-xl'>DOCUMENTARY</span><p className='underline'>junction since 2023</p>
            </div>
            <div className='w-full flex md:justify-center items-center'>
              <div className='ml-2 text-sm flex items-center border border-black p-1 rounded mt-3 md:mt-1'><span><BiSupport className='mr-1'/></span>Support: <span className='font-bold underline ml-1'>0113-312-554</span></div>
              <NavLink to="/blogs" className='ml-12 sm:ml-52 md:ml-32 flex items-center border border-[var(--danger)] p-1 rounded log-anchors text-xs lg:text-sm mt-3 md:mt-1'>My Blogs<span className='ml-1 text-[var(--danger)]'><GrBlog size={15}/></span></NavLink>
            </div>
          </div>
          <div className='flex items-center'>
          <NavLink to="/movies" className="log-anchors">Documentaries</NavLink>
          <NavLink to="/news" className="log-anchors">Local News</NavLink>
          <NavLink to="/world" className="log-anchors">World News</NavLink>
          <NavLink to="/publications" className="log-anchors">Publications</NavLink>
          </div>
        </div>
        <div className='flex flex-col justify-end mt-[-3rem]'>
            <div className='mr-4 text-[var(--primary)]'>Welcome:
              <span className='pl-2 font-bold'>{localStorage.getItem('name')}</span>
            </div>
            <button onClick={handleLogout}><NavLink className="flex items-center mr-4 justify-center btn mt-2" onClick={() => window.scrollTo(0, 0)}>Logout<span className='ml-2'><GoSignOut /></span></NavLink></button>
          </div>
        </div>): ''}

        {/* TOGGLED MENU */}
        <div onMouseLeave={toggleDrop} >
          {dropDown? (<div className='flex justify-center ml-[70%] md:ml-[58%] py-2 max-w-[200px] mx-auto bg-slate-50 shadow shadow-black rounded z-30'>
            <div className='flex flex-col px-2'>
              <h1 className='font-bold'>Category</h1>
            <NavLink to="/help" onClick={toggleDrop} className='hover:other-links'>Help</NavLink>
            <NavLink to="/news" onClick={toggleDrop} className='hover:other-links'>News</NavLink>
            <NavLink to="/world" onClick={toggleDrop} className='hover:other-links'>World</NavLink>
            <NavLink to="/business" onClick={toggleDrop} className='hover:other-links'>Business</NavLink>
            </div>
          </div>) : ''}
        </div>
        <Link  onClick={() => window.scrollTo(0, 0)} smooth={true} duration={500} className={`absolute right-3 bottom-[-80vh] bg-[var(--primary)] text-[var(--plain)] rounded-full p-1 cursor-pointer ${showButton? 'block': 'hidden'}`}><IoIosArrowUp size={38} /></Link>
    </div>
  )
}

export default Navbar