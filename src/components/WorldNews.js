import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WorldNews = ({ isLoggedIn }) => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=1040038f39923ee91e1526ad24c9ca58')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch!');
        }
      })
      .then(data => {
        console.log(data);
        if (data && data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  if (!isLoggedIn) {
    navigate('/login');
    return null; 
  }

  if (news.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='w-full pt-32'>
      <div className='w-full h-full max-w-[1000px] mx-auto border-black px-4'>
        {news.map(item => (
          <Link to={item.url} target="_blank" rel="noopener noreferrer" key={item.title}>
            <div className="py-4 w-full grid md:grid-cols-3 gap-2  border-black">
                <div>
                    <img src={item.image}/>
                </div>
                <div className='col-span-2'>
                    <p className='flex justify-center font-bold text-xl text-[var(--primary)] underline'>{item.title}</p>
                    <p className='flex font-bold py-4'>{item.publishedAt}</p>
                    <p>{item.content}</p>
                </div>
                
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WorldNews;
