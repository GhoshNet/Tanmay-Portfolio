import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { trackSocialClick } from "../utils/analytics";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black-100/55 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/tanmayghosh01"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('GitHub')}
              className="hover:text-[#915EFF] transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/tanmay-g/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick('LinkedIn')}
              className="hover:text-[#915EFF] transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:tanmay.actin@gmail.com"
              onClick={() => trackSocialClick('Email')}
              className="hover:text-[#915EFF] transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-secondary text-sm">
              © {new Date().getFullYear()} Tanmay Ghosh. All rights reserved.
            </p>
            <p className="text-secondary text-xs mt-1">
              Built with React, Three.js & GSAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;