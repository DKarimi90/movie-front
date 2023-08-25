import React, { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';

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
          <div key={item.id} className="py-4 ">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
