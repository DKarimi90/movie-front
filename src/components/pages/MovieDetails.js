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
  const [reviewForm, setReviewForm] = useState({
    comments: '', 
    rating: '', 
    user_name: ''
  })

  useEffect(() => {
    fetch(`https://movie-myk5.onrender.com/movies/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
      fetch(`https://movie-myk5.onrender.com/movies/${id}/reviews`)
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

  // POSTING REVIEWS
  const handleReviewFormChange = (e) => {
    const {name, value} = e.target; 
    setReviewForm((prevForm) => ({...prevForm, [name]: value}))
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    const newReview = {...reviewForm, movie_id: id}
    fetch('https://movie-myk5.onrender.com/reviews', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(newReview)
    })
    .then((res) => {
      if(res.ok){
        return res.json()
      }
      else {
        throw Error('Review not created')
      }
    })
    .then((createdReview) => {
      setReviews([...reviews, createdReview])
      setReviewForm({
        comments: '', 
        rating: '', 
        user_name: ''
      })
    })
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
        <div className='w-full flex flex-col max-w-[1000px] mx-auto px-3'>
          <div className='text-2xl font-bold'>
            <p>Leave a Review:</p>
          </div>
          <div className='w-full mt-6'>
              <form onSubmit={handleReviewSubmit} className="">
              <textarea className='formReview w-full px-2 outline-none' type='text' name='comments' value={reviewForm.comments} onChange={handleReviewFormChange} placeholder='Comment' rows={7} required/>
              {/* <input className='formReview' type='text' name='rating' value={reviewForm.rating} onChange={handleReviewFormChange} placeholder='rating' required/> */}
              <input className='formReview px-2 py-3 outline-none' type='text' name='user_name' value={reviewForm.user_name} onChange={handleReviewFormChange} placeholder='Your Name' required/>
              <div className='flex justify-center mt-4 '>
                <button className='bg-[var(--primary)] text-[var(--plain)] px-5 py-2 rounded-md hover:bg-[var(--primary2)]'>Submit Review</button>
              </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MovieDetails;
