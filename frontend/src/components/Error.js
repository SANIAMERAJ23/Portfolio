import error from '../asset/error.png';
const Error = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-center items-center m-9'>
        <div className='flex flex-col'>
          <h1 className='w-[40%] font-semibold sm:text-2xl lg:text-5xl'>
            OOPs
          </h1>
          <h1 className='w-[40%] font-semibold sm:text-2xl lg:text-5xl'>
            Error Occured
          </h1>
          <h1 className='font-semibold sm:text-2xl md:text-3xl lg:text-4xl'>
            The Requested URL doesn't found on the Server
          </h1>
        </div>

        <div className='w-[40%]'>
          <img src={error} alt='' className='w-full' />
        </div>
      </div>

      <h1 className='text-center sm:text-2xl md:text-3xl lg:text-5xl'>
        Please Check the URL once again{' '}
      </h1>
    </div>
  );
};

export default Error;
