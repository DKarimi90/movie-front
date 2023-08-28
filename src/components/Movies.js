// PLAY WITHIN THE SAME COMPONENT
// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';
// import { Link, useNavigate } from 'react-router-dom';

// const Movies = ({ movies, isLoggedIn }) => {
//   const navigate = useNavigate();
//   const [activeVideoIndex, setActiveVideoIndex] = useState(null);

//   if (!isLoggedIn) {
//     navigate('/login');
//     return null;
//   }

//   const playVideo = (index) => {
//     setActiveVideoIndex(index);
//   };

//   return (
//     <div className='w-full pt-36'>
//       <div className='w-full max-w-[1000px] mx-auto'>
//         {activeVideoIndex !== null && (
//           <div className='relative aspect-w-16 aspect-h-9 mb-8'>
//             <ReactPlayer
//               url={movies[activeVideoIndex].video}
//               controls
//               playing
//               width='100%'
//               height='100%'
//             />
//           </div>
//         )}

//         <div className='grid grid-cols-2 gap-8'>
//           {movies.map((movie, index) => (
//             <div key={index} className='border rounded-lg overflow-hidden shadow-md'>
//               <img src={movie.cover_image} alt={movie.title} className='w-full h-[400px] object-cover' />
//               <div className='p-6'>
//                 <p className='text-lg font-semibold'>{movie.title}</p>
//                 <p className='text-gray-600 mt-2'>{movie.release_year}</p>
//                 <div className='mt-4'>
//                   <Link onClick={() => window.scrollTo(0, 0)}><button
//                     className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
//                     onClick={() => playVideo(index)}
//                   >
//                     Watch Now
//                   </button></Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Movies;


// PLAYING THE VIDEO IN NEW COMPONENT

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Movies = ({ movies, isLoggedIn }) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  return (
    <div className='w-full pt-32 px-2'>
      <div className='w-full max-w-[1000px] mx-auto sm:grid grid-cols-2 gap-8'>
        {movies.map((movie, index) => (
          <div key={index} className='border rounded-lg overflow-hidden shadow-md'>
            <img src={movie.cover_image} alt={movie.title} className='w-full h-[400px] object-cover' />
            <div className='p-6'>
              <p className='text-lg font-semibold'>{movie.title}</p>
              <p className='text-gray-600 mt-2'>{movie.release_year}</p>
              <div className='mt-4'>
                 <Link className='border-b border-[var(--danger)]' to={`/movies/${movie.id}`}>Docu Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

