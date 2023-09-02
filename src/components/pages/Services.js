import React from 'react'
import {BiMoviePlay, BiCloudDownload} from 'react-icons/bi'
import {MdOutlineLocalMovies, MdOutlineCastForEducation} from 'react-icons/md'
import {AiOutlineShop} from 'react-icons/ai'
import {GiGrainBundle} from 'react-icons/gi'

const Services = () => {
  return (
    <div className='w-full bg-[var(--secondary3)] md:mt-16 pt-2 dark:bg-[var(--default2)] dark:text-[var(--default)]'>
        <div className='w-full max-w-[1000px] mx-auto bg-[var(--secondary3)] '>
            <div className='flex flex-col items-center pt-3 dark:bg-[var(--default)] dark:text-[var(--plain)]'>
                <h1 className='px-6 py-[6px] border border-[var(--primary)] rounded-full'>Services</h1>
                <p className='font-bold md:text-4xl py-8'>Our Best Services</p>
                <p className='max-w-[600px] px-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className='w-full grid sm:grid-cols-3 pt-6 px-2 py-2 gap-4 dark:bg-[var(--default)]'>
              <div className='service group'>
                <h1><BiMoviePlay className='service-icon'/></h1>
                <p className='service-title'>Movie and Documentary Streaming</p>
                <p className='service-description'>Offer a streaming service that allows customers to watch movies and documentaries directly from your platform, either through rental, subscription, or purchase.</p>
              </div>
              <div className='service group'>
                <h1><BiCloudDownload className='service-icon'/></h1>
                <p className='service-title'>Digital Downloads</p>
                <p className='service-description'>Provide the option for customers to purchase and download movies and documentaries to their devices for offline viewing..</p>
              </div>
              <div className='service group'>
                <h1><MdOutlineLocalMovies className='service-icon'/></h1>
                <p className='service-title'>Personalized Watchlists</p>
                <p className='service-description'>Allow customers to create personalized watchlists where they can save movies and documentaries they're interested in for future viewing.</p>
              </div>
              <div className='service group'>
                <h1><AiOutlineShop className='service-icon'/></h1>
                <p className='service-title'>Physical Media Sales</p>
                <p className='service-description'>Sell physical copies of movies and documentaries, such as DVDs, Blu-rays, and collector's editions, catering to customers who prefer owning tangible copies.</p>
              </div>
              <div className='service group'>
                <h1><GiGrainBundle className='service-icon'/></h1>
                <p className='service-title'>Bundle Deals</p>
                <p className='service-description'>Provide bundle deals where customers can purchase multiple movies or documentaries together at a discounted price.</p>
              </div>
              <div className='service group'>
                <h1><MdOutlineCastForEducation className='service-icon'/></h1>
                <p className='service-title'>Educational Resources</p>
                <p className='service-description'>Offer educational documentaries and supplementary resources for students, educators, and lifelong learners.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services