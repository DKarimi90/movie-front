import React from 'react'

const Movies = ( {movies} ) => {
  return (
    <div className='w-full pt-4'>
        <div className='w-full h-full grid grid-cols-2 gap-4'>
            {movies.map((movie, index) => (
                <div key={index}>
                    <p>{movie.title}</p>
                    <img src={movie.cover_image} alt="image" className='w-full h-full image-center'/>
                    {/* <video controls>
                    <source src={movie.video} type="video/mp4" autoPlay loop muted/>
                   </video> */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Movies