import slogz from '../asset/slogz.png';
import stepup from '../asset/steup.png';
import extension from '../asset/extension.png';

const Project = () => {
  const list = [
    {
      name: "SnapStudy",
      description:
        "Designed and developed a Chrome extension that streamlines the process of capturing and saving screenshots while watching YouTube videos. The extension automates the entire process, ensuring a seamless and distraction-free experience. It supports both Mac and Windows with intuitive keyboard shortcuts, enhancing productivity and allowing users to focus on their content effortlessly.",
      link: "https://chromewebstore.google.com/detail/snapstudy/kajdifcpoekkpbfpjeilejikekihbjjb",
      gitlink: "https://github.com/Khaliditsme/SnapStudy",
      image: extension,
    },
    {
      name: "StepUp",
      description:
        "Designed and developed StepUp, a responsive single-page E-commerce Web App for shoe retail, enabling users to browse, filter, and securely purchase products. Built and tested scalable RESTful APIs using Express and Node.js for seamless cart, checkout, and order workflows. Integrated Stripe for secure payment processing and developed an admin dashboard for managing products and orders. Utilized MongoDB Atlas with Mongoose for optimized data modeling and reliable persistence. Employed React with React Router to implement dynamic routing and a modular front-end architecture.",
      link: "https://github.com/SANIAMERAJ23/StepUp",
      gitlink: "https://github.com/SANIAMERAJ23/StepUp",
      image: stepup,
    },
    {
      name: "SlogZ",
      description:
        "Designed and developed SlogZ, a responsive single-page blog web app enabling users to create, edit, and manage rich-text posts with full authentication and CRUD capabilities. Leveraged React.js with modular components and dynamic routing for a seamless user experience. Integrated TinyMCE for intuitive rich-text editing and Appwrite for secure user authentication and scalable backend services. Employed Redux for robust global state management and implemented a clean, maintainable architecture with clear separation of concerns.",
      link: "https://github.com/SANIAMERAJ23/SlogZ",
      gitlink: "https://github.com/SANIAMERAJ23/SlogZ",
      image: slogz,
    },
  ];
  return (
    <div>
      <h1 className='text-center font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl mt-5'>
        Projects
      </h1>
      <hr className='border-2 border-red m-5 mt-4 w-[92vw] mx-auto' />
      {list.map((item) => {
        return (
          <div className='flex flex-col  lg:flex-row justify-start items-start sm:m-3 md:m-5 lg:m-14 border-b-4 border-red pb-6'>
            <div className='w-[100%] lg:w-[50%] sm:m-2 md:m-4 lg:m-7 flex flex-col justify-center items-center '>
              <h1 className='font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-3'>
                {item?.name}
              </h1>
              <p className='text-center'>{item.description}</p>
              <a
                href={item.link}
                target='_blank'
                className='font-semibold text-1xl mt-2 text-red'
                rel='noreferrer'
              >
                Live Preview
              </a>
              <br />
              <a
                href={item.gitlink}
                target='_blank'
                className='font-semibold text-1xl text-red'
                rel='noreferrer'
              >
                Github
              </a>
            </div>

            <div className='sm:w-[50vw] md:w-[40vw] lg:w-[40vw] border-2 border-grey mt-6 sm:mb-0'>
              <img src={item.image} alt='' />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
