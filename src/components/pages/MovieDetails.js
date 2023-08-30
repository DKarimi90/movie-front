import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {FaPlay} from 'react-icons/fa'


const MovieDetails = ( {isLoggedIn, scrollTop} ) => {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
      fetch(`http://localhost:3000/movies/${id}/reviews`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((reviews) => {
        console.log(reviews)
        setReviews(reviews);
      });
  }, [id]);

  const playVideo = (index) => {
    setActiveVideoIndex(index);
  };

  const formatDate = (dateString) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}; 
    return new Date(dateString).toLocaleString(undefined, options)
  }

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div className='w-full min-h-screen flex flex-col items-center bg-[var(--secondary3)] pt-32'>
      <div className='w-full max-w-3xl mx-auto p-6'>
        <div className='bg-white shadow-md overflow-hidden'>
          {activeVideoIndex !== null ? (
            <div className='relative aspect-w-16 aspect-h-9'>
              <ReactPlayer
                url={movie.video}
                controls
                playing
                width='100%'
                height='100%'
              />
            </div>
          ) : (
            <div className='relative aspect-w-16 aspect-h-9'>
              <img
                src={movie.cover_image}
                alt={movie.title}
                className='w-full h-full object-cover'
              />
              <button
                className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white'
                onClick={() => playVideo(0)} 
              >
                Watch Now
              </button>
            </div>
          )}
        </div>
        <div className='bg-[var(--plain)] mt-2'>
          <div className='p-4'>
            <h2 className='text-2xl font-semibold mb-2'>{movie.title}</h2>
            <p className='text-gray-500 mb-2'>
              Release Date: {movie.release_date}
            </p>
            <p className='text-gray-700 mb-4'>{movie.description}</p>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-gray-500'>Genre: {movie.genre}</p>
                <p className='text-gray-500'>Rating: {movie.rating}</p>
              </div>
              <Link to="/movies" onClick={scrollTop}>
                <button className='btn'>
                  Back to List
                </button>
              </Link>
            </div>
          </div>
          </div>
      </div>
      <div className='w-full max-w-[1000px] mx-auto my-4 flex flex-col'>
        <div className='flex justify-center font-bold text-2xl'>
          <p>What Others Say about this Movie</p>
        </div>
        <div className='flex flex-col items-center mx-2'>
        {reviews.map((review, index) => (
          <div key={index} className='bg-[var(--plain)] w-full my-4 max-w-[1000px] py-4 px-2'>
            <p>{review.comments}</p>
            <div className='flex justify-between mt-5'>
              <p>Posted by: <span className='font-bold text-[var(--danger)]'>{review.user_name}</span></p>
              <p>{formatDate(review.created_at)}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
