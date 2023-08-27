import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const HomeMore = () => {
  return (
    <div name="HomeMore" className='w-full md:mt-12'>
      <div className='w-full max-w-[1000px] mx-auto flex flex-col items-center pt-3'>
        <h1 className='px-6 py-[6px] border border-[var(--primary)] rounded-full'>Our Intro Video</h1>
        <p className='font-bold md:text-4xl py-8'>Watch Our Promo Video</p>
        <p className='max-w-[600px] px-2 text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div className='py-4'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=35-P5ZwP4Zg"
          controls
          muted
          // playing
        />
        <p className='pt-4 flex justify-center text-sm md:text-xl'>Source: <Link to="https://www.youtube.com/@FreeDocumentary" target="blank">https://www.youtube.com/@FreeDocumentary</Link></p>
        </div>
      </div>
    </div>
  );
};

export default HomeMore;
