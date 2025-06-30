import React from 'react';
// import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  UserPlus,
  Settings,
  Monitor,
  TrendingUp,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Import local images
import businessImg from '../assets/BC.png';
import hrImg from '../assets/HR.jpg';
import recruitmentImg from '../assets/RC.jpg';
import operationsImg from '../assets/OC.png';
import itImg from '../assets/IT.jpg';
import marketingImg from '../assets/MS.avif';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  details: string[];
  imageUrl: string;
}

const servicesData: Service[] = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Our Business Consulting services focus on helping companies achieve their strategic goals while improving efficiency and profitability.',
    color: 'from-blue-600 to-blue-700',
    details: [
      'Strategic Planning & Execution',
      'Organizational Transformation',
      'Process Improvement & Optimization',
      'Risk Management & Compliance',
      'Development Support'
    ],
    imageUrl: businessImg,
  },
  {
    icon: Users,
    title: 'HR Consulting',
    description: 'Our HR Consulting services are designed to align your workforce strategies with your business objectives, fostering an engaged and productive team.',
    color: 'from-teal-600 to-teal-700',
    details: [
      'HR Strategy & Framework Development',
      'Talent Acquisition & Management',
      'Employee Engagement & Retention',
      'Leadership Development Programs',
    ],
    imageUrl: hrImg,
  },
  {
    icon: UserPlus,
    title: 'Recruitment Consulting',
    description: 'Our Recruitment Consulting services ensure that you find the right talent, whether you’re looking for full-time employees or project-based professionals.',
    color: 'from-orange-600 to-orange-700',
    details: [
      'Full-Time Employee Recruitment (FTA)',
      'Contract Staffing Solutions',
      'Recruitment Process Outsourcing (RPO)',
      'Executive Search & Talent Sourcing',
    ],
    imageUrl: recruitmentImg,
  },
  {
    icon: Settings,
    title: 'Operational Consulting',
    description: 'Operational Consulting services focus on streamlining your business processes, improving efficiency, and driving profitability.',
    color: 'from-purple-600 to-purple-700',
    details: [
      'Business Process Reengineering (BPR)',
      'Supply Chain Management',
      'Operations Optimization',
      'Lean Management & Efficiency Gains',
    ],
    imageUrl: operationsImg,
  },
  {
    icon: Monitor,
    title: 'IT Consulting',
    description: 'Our IT Consulting services guide businesses through the complex world of technology, helping them adopt the right digital solutions and stay ahead in the competitive landscape.',
    color: 'from-green-600 to-green-700',
    details: [
      'Digital Transformation',
      'Software & ERP Solutions Identification',
      'IT Infrastructure & System Integration',
      'Technology Roadmap Development',
    ],
    imageUrl: itImg,
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Sales Consulting',
    description: 'Our Marketing and Sales Consulting services are designed to boost your market presence, enhance customer engagement, and increase revenue.',
    color: 'from-pink-600 to-pink-700',
    details: [
      'Go-to-Market Strategy Development',
      'Market Research & Competitive Analysis',
      'Sales Process Optimization',
      'Customer Experience Enhancement',
    ],
    imageUrl: marketingImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Our Services</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Business Solutions Tailored for Your Success
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-3 sm:mt-5"></div>
        </div>
        
        <div className="space-y-8 sm:space-y-10 md:space-y-14 lg:space-y-20">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-x-12 items-center"
            >
              <div 
                className={`space-y-3 sm:space-y-5 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
              >
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className={`bg-gradient-to-r ${service.color} p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg flex-shrink-0`}>
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base">{service.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">Key Services Include:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-1 sm:space-x-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm md:text-base">{detail}</span>

                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div 
                className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-14 lg:mt-16">
          <div className="bg-white p-4 sm:p-7 md:p-9 rounded-2xl shadow-lg max-w-3xl mx-auto ring-1 ring-gray-100">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-3 sm:mb-5 text-xs sm:text-sm md:text-base">
              Whether you're looking to streamline operations, enhance HR strategies, or embrace digital transformation, 
              our experienced consultants are here to guide you every step of the way.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-4 py-2 sm:px-7 sm:py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;