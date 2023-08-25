import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';

const News = ( {isLoggedIn} ) => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?apikey=pub_2789000c59dc4965609f5f027da26b2b09d61&q=Kenya&country=ke&category=entertainment,politics,technology')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to fetch!');
        }
      })
      .then(data => {
        console.log(data); 
        if (data && data.results && Array.isArray(data.results)) {
          setNews(data.results); 
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  if(!isLoggedIn) {
    navigate('/login')
  }

  return (
    <div className='w-full pt-32'>
      <div className='w-full h-full max-w-[800px] mx-auto'>
        {news.map(item => (
          <Link to={`/news/${item.id}`}><div key={item.id} className="py-4 ">
            <p className='flex justify-center font-bold text-xl text-[var(--primary)] underline'>{item.title}</p>
            <p className='flex justify-end py-6'>{item.pubDate}</p>
            <p className='flex font-bold'>{item.description}</p>
            <p>{item.content}</p>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default News;
