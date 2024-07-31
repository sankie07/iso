import React from 'react';
import Head from './Head';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Form = () => {
  return (
    <>
    <Head />
    <div className="min-h-screen dark:bg-gradient-to-b from-slate-900 w-full to-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>
      <p className="text-lg text-center">
        Get in touch with us! We would love to hear from you. Reach out via email, phone, or visit us at our office.
      </p>
    </div>
    <Footer />
    </>
  );
};

export default Form;
