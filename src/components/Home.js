import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'

const Home = () => {
  return (
    <div className='w-full pt-32'>
      <div className='w-full grid md:grid-cols-2 pt-4 px-4 gap-4 md:mt-32'>
        <div className='w-full'>
          <div className='pt-10 px-4'>
            <h1 className='font-bold text-5xl'>The Movie Junction. Your Ultimate booth center  for recent Series releases</h1>
          </div>
          <div className='font-thin px-3 py-5'>
            <p>We are a digital agency that helps movie enthusiasts to stream different genres of movie selections. We see technology as a tool to create amazing platforms and that is our underlying motivation toward bringing appealing and mind blowing content right in-front of your Laptop or mobile screens</p>
          </div>
          <div className='flex justify-evenly'>
            <div>
              <button className='btn shadow-b shadow-black'><Link to="/login" onClick={() => window.scrollTo(0, 0)}>GET STARTED</Link></button>
            </div>
            <div>
              <image />
              <Link to="/login">Watch Intro</Link>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div>
            <img src='./assets/Balicans2.jpeg'/>
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
          <div className='flex bg-gray-100 border-r border-[var(--primary)] relative rounded-lg p-1 items-center'>
            <div>
              <Link to="/about" className='btn' onClick={() => window.scrollTo(0, 0)}>Who We Are</Link>
            </div>
            <Link to="/vision" className='bg-white p-3 font-thin mx-2 rounded-md link' onClick={() => window.scrollTo(0, 0)}>Our Vision</Link>
            <Link to="/history" className='bg-white p-3 font-thin rounded-md link' onClick={() => window.scrollTo(0, 0)}>Our History</Link>
          </div>
          <div className='font-thin py-6'>
            <p className='py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look like readable English.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some form, by injected humour.</p>
          </div>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default Home