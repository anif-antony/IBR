
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')`,
          y,
        }}
      />
      <div className="absolute inset-0 bg-blue-900/60"></div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Welcome to{' '}
                <span className="text-teal-300">
                  Insight Business Reengineering
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                At Insight Business Reengineering, we are dedicated to helping businesses transform and realize their full potential. 
                Our expert consulting services span across industries, offering tailored solutions that meet your unique business challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('#services')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-white/20 backdrop-blur-sm">
                  <div className="bg-teal-500/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Strategic Planning</h3>
                  <p className="text-blue-200 text-sm">Define long-term goals and create actionable plans for success</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-white/20 backdrop-blur-sm">
                  <div className="bg-cyan-500/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">HR Excellence</h3>
                  <p className="text-blue-200 text-sm">Align workforce strategies with business objectives</p>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-white/20 backdrop-blur-sm">
                  <div className="bg-orange-500/80 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Growth Solutions</h3>
                  <p className="text-blue-200 text-sm">Drive sustainable growth through innovative strategies</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-6 rounded-xl text-white">
                  <h3 className="font-semibold mb-2">Ready to Transform?</h3>
                  <p className="text-blue-100 text-sm mb-4">Let's discuss how we can help your business reach new heights</p>
                  <button 
                    onClick={() => scrollToSection('#contact')}
                    className="text-sm font-medium hover:underline"
                  >
                    Start Your Journey →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;