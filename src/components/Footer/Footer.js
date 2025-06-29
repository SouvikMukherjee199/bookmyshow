import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm pt-10 pb-6 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-gray-700">
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Booking Tickets</a></li>
              <li><a href="#" className="hover:underline">Cancellations</a></li>
              <li><a href="#" className="hover:underline">Site Map</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Our Partners</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">INOX</a></li>
              <li><a href="#" className="hover:underline">PVR Cinemas</a></li>
              <li><a href="#" className="hover:underline">Cinepolis</a></li>
              <li><a href="#" className="hover:underline">IMAX</a></li>
            </ul>
          </div>
        </div>

        {/* Location and App Download */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-700 gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <MdLocationOn className="text-xl text-red-500" />
            <span>India</span>
          </div>
          <div className="flex gap-3">
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/google-play.png"
              alt="Google Play"
              className="w-32 h-auto"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/mac-os.png"
              alt="App Store"
              className="w-32 h-auto"
            />
          </div>
        </div>

        {/* Social and Copy */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-500 text-xs">
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
          </div>
          <div className="mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} BookMyShow Clone. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
