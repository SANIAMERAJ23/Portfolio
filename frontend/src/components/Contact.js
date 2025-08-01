import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaYoutube, FaCode } from "react-icons/fa6";

const Contact = () => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setmessage] = useState('');
  const [result, setresult] = useState(false);

  const sendmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-33v4.onrender.com/contact",
        {
          fname,
          lname,
          email,
          subject,
          message,
        }
      );
      console.log('success');
      setresult(true);
    } catch (err) {
      console.log('failure');
    }
  };

  useEffect(()=>{
    const interval = setTimeout(()=>{
        setresult(false);
    },3000)

    return ()=>clearTimeout(interval);
  },[result])

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-[70%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex flex-col w-[80%] md:w-[40%] mx-auto">
            <div className="font-bold text-2xl sm:text-2xl md:text-2xl lg:text-5xl text-center md:text-left mt-3">
              Contact
            </div>
            <div className="font-semibold text-1xl sm:text-1xl md:text-1xl lg:text-2xl mt-5 text-center md:text-left  ">
              Looking forward to hearing from you{" "}
            </div>
            <div className="flex flex-row justify-center md:justify-start">
              <div className="mr-2 my-2">
                <a
                  href="https://www.linkedin.com/in/sania-meraj/"
                  target="_blank"
                >
                  <FaLinkedin className="sm:text-1xl md:text-2xl lg:text-2xl" />
                </a>
              </div>
              <div className="mx-2 my-2">
                <a href="https://github.com/SANIAMERAJ23" target="_blank">
                  <FaGithub className="sm:text-1xl md:text-2xl lg:text-2xl" />
                </a>
              </div>
              <div className="mx-2 my-2">
                <a
                  href="mailto:saniameraj23@gmail.com?subject=Hello&body=Write%20your%20message%20here/"
                  target="_blank"
                >
                  <FaEnvelope className="sm:text-1xl md:text-2xl lg:text-2xl" />
                </a>
              </div>
              <div className="mx-2 my-2">
                <a href="https://www.instagram.com/iam_sm_23/" target="_blank">
                  <FaInstagram className="sm:text-1xl md:text-2xl lg:text-2xl" />
                </a>
              </div>
              {/* <div className="mx-2 my-2">
                <a
                  href="https://www.youtube.com/channel/UCZqjFVQ1uw1QXPHMSfU5RBQ"
                  target="_blank"
                >
                  <FaYoutube className="sm:text-1xl md:text-2xl lg:text-2xl" />
                </a>
              </div> */}
              <div className="mx-2 my-2">
                <a href="https://leetcode.com/u/saniameraj23/" target="_blank">
                  <FaCode className="sm:text-1xl md:text-2xl lg:text-2xl" />{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="w-[30vw] items-center mx-auto">
            <form action="/contact" method="POST">
              <div className="flex flex-col lg:flex-row justify-between items-center mt-[2vh]">
                <div>
                  <p>First Name*</p>
                  <input
                    onChange={(e) => setfname(e.target.value)}
                    type="text"
                    name="fname"
                    required
                    autoComplete="off"
                    className="border-2 border-black rounded-md p-1"
                  />
                </div>
                <div>
                  <p>Last Name</p>
                  <input
                    onChange={(e) => setlname(e.target.value)}
                    type="text"
                    name="lname"
                    autoComplete="off"
                    className="border-2 border-black rounded-md p-1"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center mt-[2vh]">
                <div>
                  <p>Email*</p>
                  <input
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    className="border-2 border-black rounded-md p-1"
                  />
                </div>
                <div>
                  <p>Subject*</p>
                  <input
                    onChange={(e) => setsubject(e.target.value)}
                    type="text"
                    name="subject"
                    required
                    autoComplete="off"
                    className="border-2 border-black rounded-md p-1"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between items-center mt-[4vh]">
                <p>Message</p>
                <textarea
                  onChange={(e) => setmessage(e.target.value)}
                  id="message"
                  name="messsage"
                  required
                  autoComplete="off"
                  className="border-2 border-black w-[170%] md:w-[70%] h-[50%] rounded-md p-2"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <div className="flex flex-col justify-between items-center">
                <button
                  type="submit"
                  onClick={sendmail}
                  name="submit"
                  id="submit"
                  className="border-2 border-black bg-red flex flex-col justify-center items-center w-[70%] rounded-md p-2 mt-[4vh]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {result === false ? (
        <h1 className="flex justify-center items-center font-semibold sm:text-2xl md:text-3xl lg:text-5xl mt-8">
          Fill the Above form to ask any Query
        </h1>
      ) : (
        <h1 className="flex justify-center items-center font-semibold sm:text-2xl md:text-3xl lg:text-5xl mt-8">
          Thanks for Submittng the Form
        </h1>
      )}
    </div>
  );
};

export default Contact;
