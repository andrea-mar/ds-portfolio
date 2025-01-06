import React, { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(false);
    
    if (validateForm()) {
      // Form is valid, proceed with submission
      const form = e.target;
      form.submit();
    } else {
      setShowError(true);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div id="contact" className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center items-center p-20">
        <form 
          action="https://getform.io/f/aqoozvoa"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-7/12"
        >
          <p className="text-xl font-semibold mb-6 mt-10">Contact</p>
          
          {/* {showError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
              <p>Please fill in all required fields correctly before submitting.</p>
            </div>
          )} */}

          <div className="mb-4">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`p-2 bg-transparent border-2 rounded-md focus:outline-none w-full 
                ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <input 
              type="text" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`p-2 bg-transparent border-2 rounded-md focus:outline-none w-full 
                ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="10"
              className={`p-2 bg-transparent border-2 rounded-md focus:outline-none w-full 
                ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:opacity-90 active:drop-shadow-none transition-all duration-300"
          >
            Work With Me
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;