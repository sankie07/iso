// import React from 'react';
// import Header from './Header';
// import Feature from './Feature.jsx'
// import Solution from './Solution.jsx'
// import Testimonials from './Testimonials.jsx'
// import Blog from './Blog.jsx'
// import { Link } from 'react-router-dom';
// import Footer from './Footer.jsx'

// const Home = () => {
//   return (
//    <>
//    <Header />
//    <div className="relative dark:bg-gradient-to-b from-slate-900 w-full to-gray-900 " id="home">
      
//       <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 w-full">
//         <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:to-indigo-600"></div>
//         <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-slate-900"></div>
//       </div>
//       <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
//         <div className="relative pt-36 ml-auto">
//           <div className="lg:w-2/3 text-center mx-auto">
//             <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Shaping a world with <span className="text-primary dark:text-sky-600">reimagination.</span></h1>
//             <p className="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
//             <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
//                 <Link to="/contact" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
//                   <span className="relative text-base font-semibold text-white">Get started</span>
//                 </Link>
//                 <Link to="/about" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
//                   <span className="relative text-base font-semibold text-primary dark:text-white">Learn more</span>
//                 </Link>
//               </div>
//             <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
//               <div className="text-left">
//                 <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The lowest price</h6>
//                 <p className="mt-2 text-gray-500">Some text here</p>
//               </div>
//               <div className="text-left">
//                 <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
//                 <p className="mt-2 text-gray-500">Some text here</p>
//               </div>
//               <div className="text-left">
//                 <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
//                 <p className="mt-2 text-gray-500">Some text here</p>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
//             <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
//               <img src="./assets/clients/microsoft.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
//             </div>
//             <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
//               <img src="./assets/clients/airbnb.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
//             </div>
//             <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
//               <img src="./assets/clients/google.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" />
//             </div>
//             <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
//               <img src="./assets/clients/ge.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
//             </div>
//             <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
//               <img src="./assets/clients/netflix.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" />
//             </div>
//             <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
//               <img src="./assets/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//     <Feature />
//     <Solution />
//     <Testimonials />

//     <Blog />
//     <Footer />

//    </>
//   );
// };

// export default Home;


import React from 'react';
import Header from './Header';
import Feature from './Feature.jsx'
import Solution from './Solution.jsx'
import Testimonials from './Testimonials.jsx'
import Blog from './Blog.jsx'
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx'
import Customers from './Customers.jsx';

const Home = () => {
  return (
    <>
    <Header />
    <div className="relative dark:bg-gradient-to-b from-slate-900  to-gray-900 " id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:to-indigo-600"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-slate-900"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Shaping a world with <span className="text-primary dark:text-sky-600">reimagination.</span></h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">Global Solution Overseas (GSO) is a company that focuses in giving students education that transforms and skills that are relevant to the industry. In order to give students the greatest education possible that is suited to the needs of the business, we work with an extensive list of academic partner institutions across globe.</p>
            {/* <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                <span className="relative text-base font-semibold text-white">Get started</span>
              </a>
              <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                <span className="relative text-base font-semibold text-primary dark:text-white">Learn more</span>
              </a>
            </div> */}
            {/* <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The lowest price</h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
            </div> */}
          </div>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4  transition duration-200 hover:grayscale-0">
              <img src="./src/assets/img/clg10.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4  transition duration-200 hover:grayscale-0">
              <img src="./src/assets/img/clg1.jpg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 flex  transition duration-200 hover:grayscale-0">
              <img src="./src/assets/img/clg2.jpg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4  transition duration-200 hover:grayscale-0">
              <img src="./src/assets/img/clg3.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 flex  transition duration-200 hover:grayscale-0">
              <img src="./src/assets/img/clg4.png" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4  transition duration-200 hover:grayscale-0">
              <img src="./src/assets/img/clg5.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            
          
          </div>
          {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg6.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg7.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg8.jpeg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg9.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg10.png" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg11.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            </div> */}
            {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg12.jpg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg13.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg14.jpeg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg15.jpg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg16.png" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg17.jpeg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            </div> */}
            {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6"> */}
            {/* <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg18.svg.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg19.jpg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div> */}
            {/* <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg14.jpeg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg15.jpg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg16.png" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./assets/img/clg17.jpeg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
            </div> */}
            {/* </div> */}

        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
               <Link to="/partner" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span className="relative text-base font-semibold text-white">All Partners</span>
                </Link>
         </div>

      </div>
    </div>
    <Customers />
    <Feature />
   {/* <Solution /> */}
   <Testimonials />

    {/* <Blog /> */}
   <Footer />
    </>
  );
};

export default Home;
