import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.svg';
const Header = () => {
  return (
    <div className='flex justify-around items-center'>
      <div className=' text-[20px] md:text-4xl lg:text-5xl mt-4 md:m-2 lg:m-2 flex flex-row justify-center items-center sm:h-5 md:h-6 lg:5'>
        <Link to='/' className=''>
          Sania Meraj
        </Link>
      </div>
      <div>
        <ul className='flex items-center mt-4 md:m-3 lg:m-6'>
          <li className='text-[16px] md:text-2xl lg:text-3xl mr-[1px] md:mr-2 lg:mr-2 text-red'>
            <Link to='/resume'>Resume</Link>
          </li>
          <li className='text-[16px] md:text-2xl lg:text-3xl'>|</li>
          <li className='text-[16px] md:text-2xl lg:text-3xl ml-[1px] md:ml-2 lg:ml-2 mr-[1px] md:mr-2 lg:mr-2 text-red'>
            <Link to='/project'>Project</Link>
          </li>
          <li className='text-[16px] md:text-2xl lg:text-3xl'>|</li>
          <li className='text-[16px] md:text-2xl lg:text-3xl ml-[1px] md:ml-2 lg:ml- text-red'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
