import React from 'react'
import {BiMoviePlay, BiCloudDownload} from 'react-icons/bi'
import {MdOutlineLocalMovies, MdOutlineCastForEducation} from 'react-icons/md'
import {AiOutlineShop} from 'react-icons/ai'
import {GiGrainBundle} from 'react-icons/gi'

const Services = () => {
  return (
    <div className='w-full bg-[var(--secondary3)] md:mt-16'>
        <div className='w-full max-w-[1000px] mx-auto bg-[var(--secondary3)]'>
            <div className='flex flex-col items-center pt-3'>
                <h1 className='px-6 py-[6px] border border-[var(--primary)] rounded-full'>Services</h1>
                <p className='font-bold md:text-4xl py-8'>Our Best Services</p>
                <p className='max-w-[600px] px-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className='w-full grid sm:grid-cols-3 mt-6 px-2 py-2 gap-4'>
              <div className='bg-[var(--secondary2)] rounded-lg flex flex-col group px-2 hover:scale-105 duration-700 ease-in-out hover:shadow-lg hover:shadow-black'>
                <h1><BiMoviePlay className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] group-hover:text-[var(--danger)] ml-[-8px]'/></h1>
                <p className='font-bold text-[1.2rem]'>Movie and Documentary Streaming</p>
                <p className='font-thin py-2'>Offer a streaming service that allows customers to watch movies and documentaries directly from your platform, either through rental, subscription, or purchase.</p>
              </div>
              <div className='bg-[var(--secondary2)] rounded-lg flex flex-col group px-2 hover:scale-105 duration-700 ease-in-out hover:shadow-lg hover:shadow-black'>
                <h1><BiCloudDownload className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] group-hover:text-[var(--danger)] ml-[-8px]'/></h1>
                <p className='font-bold text-[1.2rem]'>Digital Downloads</p>
                <p className='font-thin py-2'>Provide the option for customers to purchase and download movies and documentaries to their devices for offline viewing..</p>
              </div>
              <div className='bg-[var(--secondary2)] rounded-lg flex flex-col group px-2 hover:scale-105 duration-700 ease-in-out hover:shadow-lg hover:shadow-black'>
                <h1><MdOutlineLocalMovies className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] group-hover:text-[var(--danger)] ml-[-8px]'/></h1>
                <p className='font-bold text-[1.2rem]'>Personalized Watchlists</p>
                <p className='font-thin py-2'>Allow customers to create personalized watchlists where they can save movies and documentaries they're interested in for future viewing.</p>
              </div>
              <div className='bg-[var(--secondary2)] rounded-lg flex flex-col group px-2 hover:scale-105 duration-700 ease-in-out hover:shadow-lg hover:shadow-black'>
                <h1><AiOutlineShop className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] group-hover:text-[var(--danger)] ml-[-8px]'/></h1>
                <p className='font-bold text-[1.2rem]'>Physical Media Sales</p>
                <p className='font-thin py-2'>Sell physical copies of movies and documentaries, such as DVDs, Blu-rays, and collector's editions, catering to customers who prefer owning tangible copies.</p>
              </div>
              <div className='bg-[var(--secondary2)] rounded-lg flex flex-col group px-2 hover:scale-105 duration-700 ease-in-out hover:shadow-lg hover:shadow-black'>
                <h1><GiGrainBundle className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] group-hover:text-[var(--danger)]'/></h1>
                <p className='font-bold text-[1.2rem]'>Bundle Deals</p>
                <p className='font-thin py-2'>Provide bundle deals where customers can purchase multiple movies or documentaries together at a discounted price.</p>
              </div>
              <div className='bg-[var(--secondary2)] rounded-lg flex flex-col group px-2 hover:scale-105 duration-700 ease-in-out hover:shadow-lg hover:shadow-black'>
                <h1><MdOutlineCastForEducation className='w-[50px] h-[50px] md:w-[80px] md:h-[80px] group-hover:text-[var(--danger)]'/></h1>
                <p className='font-bold text-[1.2rem]'>Educational Resources</p>
                <p className='font-thin py-2'>Offer educational documentaries and supplementary resources for students, educators, and lifelong learners.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services