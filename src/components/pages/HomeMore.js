import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const HomeMore = () => {
  return (
    <div name="HomeMore" className='w-full md:mt-12 dark:bg-[var(--default)]'>
      <div className='w-full max-w-[1000px] mx-auto flex flex-col items-center pt-3'>
        <h1 className='px-6 py-[6px] border border-[var(--primary)] rounded-full'>Our Intro Video</h1>
        <p className='font-bold md:text-4xl py-8'>Watch Our Promo Video</p>
        <p className='max-w-[800px] px-2 text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div className='py-4'>
        <ReactPlayer
          url='https://player.vimeo.com/progressive_redirect/playback/814384512/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=6dbfed4b193f7a78707c633fb2ce91f9eaf1d9fe957d809b57ba3475de3656df'
          controls
          muted
          height='100%'
          width='100%'
          // playing
        />
        <p className='text-center'>Fall Season Colorful Golden Brown Leaves Landscape Forest in Eastern Europe</p>
        </div>
      </div>
    </div>
  );
};

export default HomeMore;
