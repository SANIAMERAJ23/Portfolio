import download from '../asset/download.webp';
import resume from '../asset/SaniaMeraj.pdf';
const Resume = () => {
  const downloadfile = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    link.click();
  };
  return (
    <div className="sm:m-5 md:m-6 lg:m-9">
      <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-center">
        Resume
      </h1>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={downloadfile}
          className="text-center mx-auto sm:text-2xl md:text-3xl lg:text-3xl mt-3"
        >
          Download my resume
        </button>
        <br />
        <button onClick={downloadfile}>
          <img
            src={download}
            alt=""
            className="w-12 flex justify-center items-center"
          />
        </button>
      </div>
      <hr className="border-2 border-red m-5" />

      {/* Education Section */}
      <div className="flex flex-col md:flex-row lg:flex-row sm:justify-center sm:items-center md:justify-between md:items-start m-3 sm:m-2 md:m-0">
        <h2 className="font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-center">
          Education
        </h2>
        <div className="flex flex-col sm:w-[100%] md:w-[60%]">
          <div className="flex flex-col md:flex-row lg:flex-row justify-start">
            <div className="underline decoration-2">2022-2026</div>
            <div className="ml-5">
              <h2>NIT Jalandhar </h2>
              <p>Information Technology</p>
              <p>
                <span className="font-bold">7.56</span>/10
              </p>
            </div>
            <br />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row justify-start">
            <div className="underline decoration-2">2021-2022</div>
            <div className="ml-5">
              <h2>St. Karen's High School</h2>
              <p>Higher Secondary School Certificate</p>
              <p>
                <span className="font-bold">90.2%</span> CBSE
              </p>
            </div>
            <br />
          </div>
          {/* <div className="flex flex-col md:flex-row lg:flex-row justify-start">
            <div className="underline decoration-2">2017-2018</div>
            <div className="ml-5">
              <h2>Sunshine Prep High School </h2>
              <p>Secondary School Certificate</p>
              <p>
                <span className="font-bold">92.5%</span> CBSE
              </p>
            </div>
            <br />
          </div> */}
        </div>
      </div>

      <hr className="border-2 border-red m-5" />

      {/* Skills Section  */}
      <div className="flex flex-col md:flex-row lg:flex-row sm:justify-center sm:items-center md:justify-between md:items-start m-3 sm:m-2 md:m-0">
        <h2 className="font-semibold  text-2xl sm:text-2xl md:text-3xl text-center">
          Skills
        </h2>
        <div className="sm:w-[100%] md:w-[60%] lg:w-[60%]">
          <ul className="">
            <li>
              <span className="font-semibold">Languages</span> : C/C++, Java,
              HTML, CSS, JavaScript, SQL.
            </li>
            <li>
              <span className="font-semibold">Courses</span> : Data Structures
              and Algorithms, OOPs, DBMS, Operating System.
            </li>
            <li>
              <span className="font-semibold">Libraries</span> : Express, React,
              TailwindCSS.
            </li>
            <li>
              <span className="font-semibold">Tools </span>:GitHub, VSCode,
              Atlas MongoDB Cloud.
            </li>
            <li>
              <span className="font-semibold">Databases</span> : MongoDB, MySQL.
            </li>
            <li>
              <span className="font-semibold">Coding Profile</span> : LeetCode,
              GeeksforGeek.
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-2 border-red m-5" />

      {/* Achievmnets Section */}
      <div className="flex flex-col md:flex-row lg:flex-row sm:justify-center sm:items-center md:justify-between md:items-start m-3 sm:m-2 md:m-0">
        <h2 className="font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-center">
          {" "}
          Achievments
        </h2>
        <div className="sm:w-[100%] md:w-[60%]">
          <ul>
            <li>
              <span className="font-semibold">LeetCode</span> : LeetCode rating{" "}
              <span className="font-bold">1732</span>.
            </li>
            <li>
              <span className="font-semibold">Leetcode</span> : Secured rank of{" "}
              <span className="font-bold">1281</span> out of 28244 candidates in
              LeetCode weekly contest 455.
            </li>
            {/* <li>
              <span className="font-semibold">Cybernauts</span> : Secured{" "}
              <span className="font-bold">1st</span> position out of 120
              participants in Logo Designing Competition, organized by
              Cybernauts.
            </li>
            <li>
              <span className="font-semibold">JEE Advanced </span>:Secured an
              All India Rank of <span className="font-bold">11991</span>.
            </li> */}
            <li>
              <span className="font-semibold">JEE Main</span> :In top{" "}
              <span className="font-bold">3 percentile</span> in JEE Main in
              which more than <span className="font-bold">1 million</span>{" "}
              students participated
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-2 border-red m-5" />

      {/* Certifications  */}
      <div className="flex flex-col md:flex-row lg:flex-row sm:justify-center sm:items-center md:justify-between md:items-start m-3 sm:m-2 md:m-0">
        <h2 className="font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-center">
          Certifications
        </h2>
        <div className="sm:w-[100%] md:w-[60%]">
          <ul>
            <li>
              <span className="font-semibold">The Web Developer BootCamp </span>{" "}
              Certification from Udemy
            </li>
            <li>
              <span className="font-semibold mr-1">
                Mastering Data Structures and Algorithms using C and C++
              </span>
              Certification from Udemy
            </li>
            <li>
              <span className="font-semibold">
                {" "}
                Learn C++ Programming and OOPs Concept
              </span>{" "}
              Certification from Udemy
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <hr className="border-2 border-red m-5" />
    </div>
  );
};

export default Resume;
