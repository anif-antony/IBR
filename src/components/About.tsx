import React from 'react';
import { Heart, Shield, Users, Lightbulb, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import hrImg from '../assets/HR.png';

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Heart,
    title: 'Enjoy & Excel',
    description: 'Enjoy the people with whom you work, have fun and do a great job'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering excellence in every project and engagement'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Integrity and trustworthiness form the foundation of our relationships'
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Practice responsible leadership in all our business endeavors'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Strive to innovate and bring fresh perspectives to every challenge'
  }
];

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for business transformation and sustainable growth.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-6"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 leading-snug">Who We Are: Innovating for Your Success</h3>
          <p className="text-gray-600 leading-relaxed">
            Insight Business Reengineering (IBR) is a partner for businesses seeking innovation, growth, and sustainability. 
            Our consulting expertise covers a wide spectrum of industries, allowing us to develop customized strategies that address your unique challenges.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe in a collaborative approach, working closely with your team to deliver practical, results-driven solutions. 
            With a commitment to operational excellence, we equip businesses to adapt to change and achieve their long-term objectives.
          </p>
        </div>
        
        <div className="relative h-80 md:h-96">
          <img 
            src={hrImg}
            alt="Business team collaborating" 
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 sm:gap-8">
          {values.map((value) => (
            <div 
              key={value.title} 
              className="text-center p-2 sm:p-6"
            >
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto shadow-md">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 text-lg mb-2">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Cards Section */}
      <div className="mt-16 flex flex-col lg:flex-row justify-center items-stretch gap-10">
        {/* Our Mission Card */}
        <div className="bg-white shadow-xl rounded-xl px-6 py-8 max-w-xl w-full text-center border border-gray-100 mx-2 sm:mx-0 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 italic mb-4">
            “To be the foremost and trusted strategic business consultant in the field of consulting”
          </p>
          <p className="text-base sm:text-lg text-gray-700 italic">
            “To help clients to visualize business differently and discover opportunities to achieve greater results”
          </p>
        </div>
        {/* Our Vision Card */}
        <div className="bg-white shadow-xl rounded-xl px-6 py-8 max-w-xl w-full text-center border border-gray-100 mx-2 sm:mx-0 flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 italic">
            To be recognized as the go-to partner for businesses seeking innovative solutions to overcome challenges and achieve sustainable growth.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;