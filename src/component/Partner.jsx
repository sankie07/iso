// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';

// const Partner = () => {
//   return (
//     <>
//     <Header />
//     <div className="min-h-screen dark:bg-gradient-to-b from-slate-900 w-full to-gray-900 p-6">
//       <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">About Us</h1>
//       <p className="text-lg text-center">
//         We are a leading company in our industry, committed to providing the best products and services to our customers. Our team of experts is passionate about innovation and excellence.
//       </p>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default Partner;
import React from 'react';
import Head from './Head';
import Footer from './Footer';
import { Link } from 'react-router-dom';

// Sample data for images
const images = [
  {
    id: 1,
    src: './src/assets/img/clg1.jpg',
    name: 'WEBSTER UNIVERSITY',
  },
  {
    id: 2,
    src: './src/assets/img/clg2.jpg',
    name: 'Image 2',
  },
  {
    id: 3,
    src: './src/assets/img/clg3.png',
    name: 'Image 3',
  },
  {
    id: 4,
    src: './src/assets/img/clg9.png',
    name: 'Image 4',
  },
  {
    id: 5,
    src: './src/assets/img/clg4.png',
    name: 'Image 5',
  },
  {
    id: 6,
    src: './src/assets/img/clg5.png',
    name: 'Image 6',
  },
  {
    id: 7,
    src: './src/assets/img/clg6.png',
    name: 'Image 7',
  },
  {
    id: 8,
    src: './src/assets/img/clg10.png',
    name: 'Image 8',
  },
  {
    id: 9,
    src: './src/assets/img/clg7.png',
    name: 'Image 9',
  },
  {
    id: 10,
    src: './src/assets/img/clg8.jpeg',
    name: 'Image 10',
  },
  {
    id: 11,
    src: './src/assets/img/clg11.png',
    name: 'Image 11',
  },
  {
    id: 12,
    src: './src/assets/img/clg12.jpg',
    name: 'Image 12',
  },
  {
    id: 13,
    src: './src/assets/img/clg13.png',
    name: 'Image 13',
  },
  {
    id: 14,
    src: './src/assets/img/clg14.jpeg',
    name: 'Image 14',
  },
  {
    id: 15,
    src: './src/assets/img/clg15.jpg',
    name: 'Image 15',
  },
  {
    id: 16,
    src: './src/assets/img/clg16.png',
    name: 'Image 16',
  },{
    id: 17,
    src: './src/assets/img/clg17.jpeg',
    name: 'Image 17',
  },{
    id: 18,
    src: './src/assets/img/clg18.svg.png',
    name: 'Image 18',
  },
  {
    id: 19,
    src: './src/assets/img/clg19.jpg',
    name: 'Image 19',
  },{
    id: 20,
    src: './src/assets/img/clg15.jpg',
    name: 'Image 20',
  },
];

const Partner = () => {
  return (
   <>
   <Head />
   <div className="relative dark:bg-gradient-to-b from-slate-900  to-gray-900 pt-10 ">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center pt-10">All are Partner</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-10  ">
        {images.map((image) => (
          <div
            key={image.id}
            className="dark:bg-gradient-to-b from-slate-800 to-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 m-3"
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white text-center">
                {image.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
   <Footer />
   </>
  );
};

export default Partner;
