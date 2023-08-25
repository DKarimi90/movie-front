import React from 'react'
import { useNavigate } from 'react-router-dom'

const Movies = ( {movies, isLoggedIn} ) => {
const navigate = useNavigate()

  if(!isLoggedIn) {
    navigate('/login')
  }

  return (
    <div className='w-full pt-20'>
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