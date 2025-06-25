import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
               <div className="flex items-center">
            <img
              src={logo}
              alt="Insight Business Reengineering Logo"
         
            className="mt-4 h-20 sm:h-24 md:h-28 lg:h-28 xl:h-30 2xl:h-32 w-auto object-contain"/>
          </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for business transformation, helping organizations achieve sustainable growth 
              through innovative consulting solutions.
            </p>
            <div className="text-center">
              <p className="text-sm text-gray-400 font-medium mb-2">Our Mission</p>
              <p className="text-sm text-gray-300 italic">
                "To be the foremost and trusted strategic business consultant in the field of consulting"
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Business Consulting</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">HR Consulting</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Recruitment Solutions</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Operational Consulting</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">IT Consulting</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Marketing & Sales</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <a 
                  href="mailto:pandiyarajan.p@insight.ind.in" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  pandiyarajan.p@insight.ind.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <a 
                  href="tel:+918807063393" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +91 88070 63393
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-1" />
                <span className="text-gray-400">
                  5/313 A, Ma Po Si Street,<br />
                  Thiruvallur - 602 001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Insight Business Reengineering. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;