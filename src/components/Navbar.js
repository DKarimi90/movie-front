import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-32'>
        <div className='w-full h-full max-w-[800px] mx-auto flex justify-between items-center'>
            <div className='uppercase font-bold text-[var(--primary)] text-3xl'><Link to="/">Movie</Link></div>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar