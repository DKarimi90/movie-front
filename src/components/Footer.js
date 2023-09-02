import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='w-full dark:bg-[var(--default2)]'>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                <svg className="w-8 text-deep-purple-accent-400 text-[var(--primary)] dark:text-[var(--secondary)]" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} stroke="currentColor" fill="none">
                  <rect x={3} y={1} width={7} height={12} />
                  <rect x={3} y={17} width={7} height={6} />
                  <rect x={14} y={1} width={7} height={6} />
                  <rect x={14} y={11} width={7} height={12} />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-[var(--primary)] dark:text-[var(--secondary)] uppercase">Movie</span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm dark:text-[var(--secondary3)] ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <p className="mt-4 text-sm dark:text-[var(--secondary3)]">
                  Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="footer-sub">Category</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="footer-links">News</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">World</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Games</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">References</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="footer-sub">Business</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="footer-links">Web</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">eCommerce</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Business</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Entertainment</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Portfolio</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="footer-sub">Apples</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="footer-links">Media</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Brochure</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Nonprofit</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Educational</a>
                  </li>
                  <li>
                    <Link to="recent" smooth={true} duration={700} className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Recent Projects</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="footer-sub">Cherry</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="footer-links">Infopreneur</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Personal</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Wiki</a>
                  </li>
                  <li>
                    <a href="/" className="footer-links">Forum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-[var(--secondary3)]">
              Copy &copy; 2023 David. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      );
}

export default Footer