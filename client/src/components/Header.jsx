import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-[#505081] shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-gray-100'>Grocery</span>
            <span className='text-yellow-300'>Ease</span>
          </h1>
        </Link>
        
        <ul className='flex gap-4'>
        {!currentUser && (
          <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline'>
              Home
            </li>
          </Link>
        )}
          {/*user log welanm grocery list page ekt nettm about us page ekt*/}
          <Link to={currentUser ? '/grocery-list' : '/about'}>
           <li className='hidden sm:inline text-white hover:underline'>
            {currentUser ? 'Grocery List' : 'About us'}
          </li>
          </Link>
          
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-white hover:underline'> Sign in</li>
            )}
          </Link>
          {!currentUser && (
          <Link to='/sign-up'>
            <li className='hidden sm:inline text-red-400 hover:underline'>
              sign up
            </li>
          </Link>
          )}
        </ul>
      </div>
    </header>
  );
}
