import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  return (
    <div className='w-full h-32'>
        <div className='w-full h-full max-w-[800px] mx-auto flex justify-between items-center'>
            <div className='uppercase font-bold text-[var(--primary)] text-3xl px-2'><Link to="/">Movie</Link></div>
            <div className='hidden sm:flex'>
                <NavLink to="/" className="anchors">Home</NavLink>
                <NavLink to="/movies" className="anchors">Movies</NavLink>
                <NavLink to="/register" className="anchors">Register</NavLink>
                <NavLink to="/login" className="anchors">Login</NavLink>
            </div>
            <div className='block sm:hidden pr-3'>
              <AiOutlineMenu />
            </div>
           
            {/* MOBILE MENU */}
            <div className='absolute left-0 top-0 mt-[2.9rem] block sm:hidden'>
            <div className='uppercase font-bold text-[var(--primary)] text-3xl px-2'><Link to="/">Movie</Link></div>
            <div className='flex flex-col'>
                <NavLink to="/" className="mobile-anchors">Home</NavLink>
                <NavLink to="/movies" className="mobile-anchors">Movies</NavLink>
                <NavLink to="/register" className="mobile-anchors">Register</NavLink>
                <NavLink to="/login" className="mobile-anchors">Login</NavLink>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar