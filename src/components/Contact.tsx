import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'pandiyarajan.p@insight.ind.in',
      action: 'mailto:pandiyarajan.p@insight.ind.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 88070 63393',
      action: 'tel:+918807063393'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: '5/313 A, Ma Po Si Street, Thiruvallur - 602 001.',
      action: null
    }
  ];

  const validate = () => {
    let tempErrors: Errors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help you take your business to the next level. Let's start a conversation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-y-16 lg:gap-y-0 lg:gap-x-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <contact.icon className="h-6 w-6 text-teal-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-blue-200 hover:text-white transition-colors duration-200"
                        >
                          {contact.info}
                        </a>
                      ) : (
                        <p className="text-blue-200">{contact.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-teal-300" />
                Business Hours
              </h4>
              <div className="space-y-2 text-blue-200">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Send className="h-6 w-6 mr-3 text-teal-300" />
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.name ? 'border-red-500' : 'border-white/20'}`}
                    required
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.email ? 'border-red-500' : 'border-white/20'}`}
                    required
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 ${errors.message ? 'border-red-500' : 'border-white/20'}`}
                    required
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
                </div>
                
                <div className="pt-2">
                   <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : (isSubmitted ? 'Message Sent!' : 'Send Message')}
                    {!isSubmitting && !isSubmitted && <Send className="h-5 w-5 ml-2" />}
                  </button>
                </div>
              </div>
            </form>
            {isSubmitted && <p className="text-green-400 text-center mt-4">Thank you for your message! We will get back to you shortly.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;