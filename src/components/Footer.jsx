import React from 'react';
import FacebookIcon from '../assets/icons/facebook.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-[#0072ff] to-[#00c6ff] text-white py-8 border-t-2 border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm">We are a leading e-commerce platform providing top-notch services and products to our customers. Our mission is to deliver excellence in every aspect of our business.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <img src={FacebookIcon} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <img src={TwitterIcon} alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <img src={InstagramIcon} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <img src={LinkedinIcon} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold mb-4">Newsletter</h2>
            <form>
              <input type="email" placeholder="Enter your email" className="w-full p-2 mb-2 text-black rounded" />
              <button type="submit" className="w-full p-2 bg-white text-[#0072ff] rounded hover:bg-gray-50">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 Business Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
