import React from 'react';

const Testimonials = () => {
  return (
    <div id="testimonials" className="text-gray-600 dark:text-gray-300 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-10 md:px-12 xl:px-6">
        <div className="mb-20  space-y-4 px-6 md:px-0">
          <h2 className="text-center  text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Our Family.
          </h2>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              {/* <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar.webp" alt="user avatar" width="400" height="400" loading="lazy" /> */}
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Siya Singh</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">The GSO Group have been a great partner to help verify and validate my direction, we all need guidance every now and then and I have been fortunate to have them available as my partner for the future.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              {/* <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar-1.webp" alt="user avatar" width="200" height="200" loading="lazy" /> */}
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Ankit Rao</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
              </div>
            </div>
            <p className="mt-8"> I truly appreciate the experience I have had with the GSO Group, and it was truly valuable, I recommend the organisation to anyone who is looking for a partner for their future. They are a responsible organisation.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              {/* <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar-2.webp" alt="user avatar" width="200" height="200" loading="lazy" /> */}
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Nand Kishore</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">United Kingdom</p>
              </div>
            </div>
            <p className="mt-8">Thank you to the GSO team for the help, support and unbiased insight in helping me make meaningful decision about my future. It's been a pleasure to work with the team</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              {/* <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar-3.webp" alt="user avatar" width="200" height="200" loading="lazy" /> */}
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white"> Ramesh Kompally</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">Thanks to GSO their guidance and support, I've gained valuable insights and practical knowledge that have significantly enhanced my academic and professional journey.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              {/* <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar-4.webp" alt="user avatar" width="200" height="200" loading="lazy" /> */}
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Neha Pandey</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Manager</p>
              </div>
            </div>
            <p className="mt-8"> Global Solution overseas truly stands out for their commitment to student success. From the initial consultation to the final admission process, their consultants provided invaluable support and guidance every step of the way. Their personalized approach and attention to detail ensured that I found the perfect academic fit for my goals and aspirations. I cannot thank them enough for their expertise and dedication. Highly recommended for anyone seeking reliable educational consultancy services.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              {/* <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar-2.webp" alt="user avatar" width="400" height="400" loading="lazy" /> */}
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">Mohammad Azeem</h6>
                <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
              </div>
            </div>
            <p className="mt-8">Global Solution overseas exceeded all my expectations when it came to finding the right educational path. Their counselors took the time to understand my interests, strengths, and career aspirations, providing tailored advice that set me on the path to success. With their support, I not only found the perfect course but also secured valuable opportunities for internships and networking. Thank you for making my educational dreams a reality!".</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
