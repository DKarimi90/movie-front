import React, { useState, useEffect } from 'react';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';

const FAQ = () => {
  const [showContent, setShowContent] = useState({});

  useEffect(() => {
    setShowContent({
      question1: false,
      question2: false,
      question3: false,
    });
  }, []);

  const toggleContent = (question) => {
    setShowContent((prevShowContent) => {
      const updatedShowContent = {};
      for (const key in prevShowContent) {
        updatedShowContent[key] = key === question ? !prevShowContent[key] : false;
      }
      return updatedShowContent;
    });
  };


  return (
    <div className='w-full min-h-screen pt-52'>
      <div className='pt-4 w-full h-full flex flex-col max-w-[1000px] bg-[var(--plain)]  rounded mx-auto items-center'>
        <h1 className='font-bold'>Help</h1>
        <div className='w-full h-full flex flex-col px-4 py-4'>
          <div className='flex items-center font-bold'>
           <p>Do you Offer Live Stream Services?</p> 
              <div className='ml-1' onClick={() => toggleContent('question1')}>
                {showContent['question1'] ?  <BsChevronUp />: <BsChevronDown />}
              </div>
          </div>
          {showContent['question1'] ? (
            <div className='w-full'>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='w-full h-full flex flex-col px-4 py-4'>
          <div className='flex items-center font-bold'>
           <p>Do you Offer Live Stream Services?</p> 
              <div className='ml-1' onClick={() => toggleContent('question2')}>
                {showContent['question2'] ?  <BsChevronUp />: <BsChevronDown />}
              </div>
          </div>
          {showContent['question2'] ? (
            <div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='w-full h-full flex flex-col px-4 py-4'>
          <div className='flex items-center font-bold'>
           <p>Do you Offer Live Stream Services?</p> 
              <div className='ml-1' onClick={() => toggleContent('question3')}>
                {showContent['question3'] ?  <BsChevronUp />: <BsChevronDown />}
              </div>
          </div>
          {showContent['question3'] ? (
            <div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <NavLink to="/help" className="flex w-full justify-center ">Back</NavLink>
    </div>
  );
};

export default FAQ;
