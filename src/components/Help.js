import React from 'react'
import FAQ from './FAQ'
import { NavLink } from 'react-router-dom'

const Help = () => {
  return (
    <div className='w-full h-screen dark:bg-[var(--default)] dark:text-[var(--plain)] pt-52'>
      <div className='w-full items-center justify-center flex flex-col'>
        <NavLink to="/help/faq">Frequently Asked Questions</NavLink>
      </div>
    </div>
  )
}

export default Help