import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeMore from './pages/HomeMore'
import Services from './pages/Services'
import {Link} from 'react-scroll'
import Recent from './pages/Recent'

const Home = () => {
  return (
    <div className='w-full pt-32'>
      <div className='w-full grid md:grid-cols-2 pt-4 px-2 gap-4 md:mt-32'>
        <div className='w-full'>
          <div className='pt-10 px-2'>
            <h1 className='font-bold text-5xl'>The Movie Junction. Your Ultimate booth center  for recent Series releases</h1>
          </div>
          <div className='font-thin px-2 py-5'>
            <p>We are a digital agency that helps movie enthusiasts to stream different genres of movie selections. We see technology as a tool to create amazing platforms and that is our underlying motivation toward bringing appealing and mind blowing content right in-front of your Laptop or mobile screens</p>
          </div>
          <div className='flex justify-evenly'>
            <div>
              <button className='btn shadow-b shadow-black'><NavLink to="/login" onClick={() => window.scrollTo(0, 0)}>GET STARTED</NavLink></button>
            </div>
            <div>
              <Link to="HomeMore" className='cursor-pointer' smooth={true} duration="700">Watch Intro</Link>
            </div>
          </div>
          <div className='w-full bg-red-500 flex flex-col mt-6'>
            <h className='flex justify-center'>See Our Recent Releases</h>
          <div className='w-full bg-green-500 max-w-[700px] mx-auto'>
            <Recent />
          </div>
          </div>
        </div>
        <div className='w-full'>
          <div>
            <img src='./assets/Balicans2.jpeg' className='relative animate-right'/>
          </div>
        </div>
        <div className='w-full bg-green-600'></div>
      </div>
      <div className='w-full max-w-[1000px] mx-auto grid md:grid-cols-2 p-4 px-4 gap-4 mt-12'>
        <div>
          <img src='./assets/Bal.jpg'/>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <h1 className='font-thin text-lg border-b text-[var(--primary)]'>OUR STORY</h1>
          </div>
          <div className='font-bold text-3xl py-6'>
            Our team comes with the experience and knowledge
          </div>
          <div className='flex bg-[var(--secondary3)] border-r border-[var(--primary)] relative rounded-lg p-1 items-center'>
            <div>
              <NavLink to="/about" className='btn' onClick={() => window.scrollTo(0, 0)}>Who We Are</NavLink>
            </div>
            <NavLink to="/vision" className='bg-[var(--plain)] p-3 font-thin mx-2 rounded-md link' onClick={() => window.scrollTo(0, 0)}>Our Vision</NavLink>
            <NavLink to="/history" className='bg-[var(--plain)] p-3 font-thin rounded-md link' onClick={() => window.scrollTo(0, 0)}>Our History</NavLink>
          </div>
          <div className='font-thin py-6'>
            <p className='py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look like readable English.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some form, by injected humour.</p>
          </div>
        </div>
      </div>
      <Services />
      <HomeMore />
    </div>
  )
}

export default Home