// src/pages/About.jsx

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen dark:bg-gradient-to-b from-slate-900 w-full to-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">About Us</h1>
      <p className="text-lg text-center">
        We are a leading company in our industry, committed to providing the best products and services to our customers. Our team of experts is passionate about innovation and excellence.
      </p>
    </div>
    <Footer />
    </>
  );
};

export default About;
