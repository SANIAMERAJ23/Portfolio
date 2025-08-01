import React, { useState } from 'react';
import footer from '../asset/foot.png';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaAddressCard,
} from 'react-icons/fa';
import { FaCode, FaInstagram, FaYoutube } from 'react-icons/fa6';

const Footer = () => {

  const [check,setcheck] = useState(false);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly items-center  sm:mb-4 lg:mb-0">
        {/* Leftmost Section */}
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start">
          <h3 className="font-semibold text-1xl lg:text-[20px]">
            Contact Info
          </h3>
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-row lg:flex-row justify-evenly items-center">
              <FaEnvelope className="sm:text-1xl md:text-2xl" />
              <h3 className="sm:text-sm md:text-sm lg:text-base m-1">
                saniameraj23@gmail.com
              </h3>
            </div>
            <div className="flex flex-row lg:flex-row justify-evenly  items-center">
              <FaAddressCard className="sm:text-xs  md:text-2xl" />
              <h3 className="sm:text-sm md:text-sm lg:text-base m-1">
                Patna, Bihar, India-800014
              </h3>
            </div>
          </div>
        </div>

        {/* Rightmost Section*/}
        <div className="flex flex-col justify-between md:justify-start items-center md:items-center">
          <h3 className="font-semibold text-1xl lg:text-[20px]">
            You can find me here
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sania-meraj/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="sm:text-1xl md:text-2xl lg:text-2xl" />
            </a>
            <a
              href="https://github.com/SANIAMERAJ23"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="sm:text-1xl md:text-2xl lg:text-2xl" />
            </a>
            <a
              href="mailto:saniameraj23@gmail.com?subject=Hello&body=Write%20your%20message%20here/"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope className="sm:text-1xl md:text-2xl lg:text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/iam_sm_23/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="sm:text-1xl md:text-2xl lg:text-2xl" />
            </a>
            {/* <a
              href="https://www.youtube.com/channel/UCZqjFVQ1uw1QXPHMSfU5RBQ"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="sm:text-1xl md:text-2xl lg:text-2xl" />
            </a> */}
            <a
              href="https://leetcode.com/u/saniameraj23/"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode className="sm:text-1xl md:text-2xl lg:text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <img
          src={footer}
          alt=""
          className=" md:h-[30vh] md:object-contain w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;
