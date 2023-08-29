import React, {useState, useEffect} from 'react'
import {IoIosArrowUp} from 'react-icons/io'
import { Link } from 'react-scroll'

const ScrollButton = ( {scrollTop} ) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleButton = () => {
    const scrollToTop = window.pageYOffset; 
    const threshold = 120; 
  
    setShowButton(scrollToTop > threshold)
    }
    window.addEventListener('scroll', handleButton)
    return ()=> window.removeEventListener('scroll', handleButton)
  }, [])

    
  return (
    <div className='bg-[var(--primary)] flex p-1'>
        <Link to="home" className='text-[var(--plain)]'><IoIosArrowUp size={38} /></Link>
    </div>
  )
}

export default ScrollButton