import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeMore from './pages/HomeMore'
import Services from './pages/Services'
import {Link} from 'react-scroll'
import Recent from './pages/Recent'
import Map from './pages/Map'

const Home = ( {scrollTop} ) => {


  return (
    <div name="home" className='w-full pt-32 md:pt-1'>
      <div className='w-full grid lg:grid-cols-2 pt-4 px-2 gap-4 md:mt-32'>
        <div className='w-full'>
          <div className='pt-10 px-2'>
            <h1 className='font-bold text-2xl md:text-5xl'>The Movie Junction. Your Ultimate booth center  for recent Series releases</h1>
          </div>
          <div className='font-thin px-2 py-5'>
            <p>We are a digital agency that helps movie enthusiasts to stream different genres of movie selections. We see technology as a tool to create amazing platforms and that is our underlying motivation toward bringing appealing and mind blowing content right in-front of your Laptop or mobile screens. Our clients also have an opportunity to screen through local and international news. </p>
          </div>
          <div className='flex justify-evenly items-center'>
            <div>
              <button className='btn shadow-b shadow-black'><NavLink to="/login" onClick={scrollTop}>GET STARTED</NavLink></button>
            </div>
            <div>
              <Link to="Map" className="scroll-cursor other-links" smooth={true} duration={700}>Visit us</Link>
            </div>
            <div>
              <Link to="HomeMore" className='scroll-cursor other-links' smooth={true} duration="700">Watch Intro</Link>
            </div>
          </div>
          <div className='w-full h-64 mt-4 flex items-center'>
            {/* <Recent /> */}
              <div className='w-full max-w-[800px] bg-[var(--plain)] h-52 mx-auto shadow-sm shadow-black rounded-lg'>
                <div className='flex items-center h-32'>
                  <div className='m-4 flex justify-center shadow'><img src='./assets/trial.jpeg' className='h-[70%] w-[60%]'/></div>
                  <div className='flex flex-col'>
                    <h1 className='border-b text-sm md:text-2xl'>Free Webinar</h1>
                    <p className='text-xs md:text-lg'>Enhancing  ping and latency with Servercore infrastructure: ways to cut expenses.</p>
                  </div>
                </div>
                <div className='flex justify-between px-4 items-center mt-2'>
                  <NavLink to='/about' className='other-links' onClick={scrollTop} >Servicecore</NavLink>
                  <div>
                    <button className='btn px-20 shadow-lg shadow-black'>Sign Up</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className='w-full'>
          <div>
            <img src='./assets/Balicans2.jpeg' className='relative animate-right md:pt-12'/>
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
          <div className='flex bg-[var(--secondary3)] relative rounded-lg p-1 items-center'>
            <div>
              <NavLink to="/about" className='btn small-links' onClick={scrollTop}>Who We Are</NavLink>
            </div>
            <NavLink to="/vision" className='bg-[var(--plain)] p-3 font-thin mx-2 rounded-md link small-links' onClick={scrollTop}>Our Vision</NavLink>
            <NavLink to="/history" className='bg-[var(--plain)] p-3 font-thin rounded-md link small-links' onClick={scrollTop}>Our History</NavLink>
          </div>
          <div className='font-thin py-6'>
            <p className='py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look like readable English.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some form, by injected humour.</p>
          </div>
        </div>
      </div>
      <Services />
      <HomeMore />
      <Recent />
      <Map />
    </div>
  )
}

export default Home