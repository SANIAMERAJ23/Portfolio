import image from '../asset/khalid.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center m-10'>
      <div className='w-full max-w-md'>
        <img src={image} alt='' className='w-full rounded-full' />
      </div>
      <div className='text-center mt-10'>
        <h1 className='text-4xl md:text-8xl font-bold'>Hello</h1>
        <h3 className='text-2xl md:text-3xl font-semibold'>A Bit About Me</h3>
        <p className='text-lg md:text-base'>
          I'm Khalid, a developer passionate about Data Structures and Problem
          Solving. I specialize in creating user-friendly web solutions with
          technologies like ReactJS and Node.js. I’m always exploring new tools
          and frameworks to expand my skill set and solve complex problems. I'm
          committed to continuous growth and open to new opportunities and
          collaborations.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
        <Link
          to='/resume'
          className='w-full md:w-40 h-40 border-2 border-black rounded-full bg-golden p-10 font-semibold text-2xl flex items-center justify-center'
        >
          Resume
        </Link>
        <Link
          to='/project'
          className='w-full md:w-40 h-40 border-2 border-black rounded-full bg-red p-10 font-semibold text-2xl flex items-center justify-center'
        >
          Projects
        </Link>
        <Link
          to='/contact'
          className='w-full md:w-40 h-40 border-2 border-black rounded-full bg-skyblue p-10 font-semibold text-2xl flex items-center justify-center'
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;
