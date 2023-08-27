import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Recent = () => {
  const images = [
    {url: './assets/1.jpg', 
    caption: 'French Documentary', 
    release: '22/07/2023'},
    {url: './assets/3.jpg', 
    caption: 'Thai Documentary', 
    release: '22/05/2023'},
    {url: './assets/4.jpg', 
    caption: 'Scotland Documentary', 
    release: '22/07/2023'},
    {url: './assets/5.jpg', 
    caption: 'Malaysian Documentary', 
    release: '22/04/2023'},
    {url: './assets/thai.jpg', 
    caption: 'Seychelles Documentary', 
    release: '22/06/2023'},
    
  ];

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div name="recent" className='w-full mt-6'>
      <div className='w-full max-w-[800px] mx-auto'>
        <div className='flex justify-center font-bold'>
          <h1>See Our Recent Releases</h1>
        </div>
        <div className='w-full max-w-[700px] mx-auto py-4'>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className='px-2'>
                <img src={image.url} alt={`Recent Release ${index}`} />
                <div className='flex justify-between mt-2 bg-[var(--secondary3)] rounded-md px-3 py-1 shadow-black'>
                  <p>{image.caption}</p>
                  <p>{image.release}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recent;
