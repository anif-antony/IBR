import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../lib/utils';
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
    description: 'Strategic planning and organizational transformation to achieve your business goals.',
    color: 'from-blue-600 to-blue-700',
    details: [
      'Strategic Planning & Execution',
      'Organizational Transformation',
      'Process Improvement & Optimization',
      'Risk Management & Compliance',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Users,
    title: 'HR Consulting',
    description: 'Align your workforce strategies with business objectives for maximum productivity.',
    color: 'from-teal-600 to-teal-700',
    details: [
      'HR Strategy & Framework Development',
      'Talent Acquisition & Management',
      'Employee Engagement & Retention',
      'Leadership Development Programs',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: UserPlus,
    title: 'Recruitment Consulting',
    description: 'Find the right talent for your organization with our comprehensive recruitment solutions.',
    color: 'from-orange-600 to-orange-700',
    details: [
      'Full-Time Employee Recruitment (FTA)',
      'Contract Staffing Solutions',
      'Recruitment Process Outsourcing (RPO)',
      'Executive Search & Talent Sourcing',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Settings,
    title: 'Operational Consulting',
    description: 'Streamline processes and improve operational efficiency across your organization.',
    color: 'from-purple-600 to-purple-700',
    details: [
      'Business Process Reengineering (BPR)',
      'Supply Chain Management',
      'Operations Optimization',
      'Lean Management & Efficiency Gains',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop'
  },
  {
    icon: Monitor,
    title: 'IT Consulting',
    description: 'Navigate digital transformation and adopt the right technology solutions.',
    color: 'from-green-600 to-green-700',
    details: [
      'Digital Transformation',
      'Software & ERP Solutions Identification',
      'IT Infrastructure & System Integration',
      'Technology Roadmap Development',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Sales Consulting',
    description: 'Boost market presence and increase revenue with strategic marketing solutions.',
    color: 'from-pink-600 to-pink-700',
    details: [
      'Go-to-Market Strategy Development',
      'Market Research & Competitive Analysis',
      'Sales Process Optimization',
      'Customer Experience Enhancement',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Business Solutions Tailored for Your Success
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4 sm:mt-6"></div>
        </div>
        
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-32">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-x-16 items-center"
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true, amount: 0.25 }}
              // transition={{ staggerChildren: 0.3 }}
            >
              <motion.div 
                className={`space-y-4 sm:space-y-6 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
                // variants={index % 2 !== 0 ? slideInFromRight(0) : slideInFromLeft(0)}
              >
                <div className="flex items-center space-x-3 sm:space-x-5">
                  <div className={`bg-gradient-to-r ${service.color} p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg flex-shrink-0`}>
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">{service.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Key Services Include:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2 sm:space-x-3">
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-56 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl"
                // variants={index % 2 !== 0 ? slideInFromLeft(0) : slideInFromRight(0)}
              >
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-lg max-w-4xl mx-auto ring-1 ring-gray-100">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Whether you're looking to streamline operations, enhance HR strategies, or embrace digital transformation, 
              our experienced consultants are here to guide you every step of the way.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl"
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