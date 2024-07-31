import React from 'react';

// SVG Icons as React Components
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M12 12.713l-11.375-8.713h22.75l-11.375 8.713zm-12-10.713v20h24v-20h-24zm22 18h-20v-15.979l10 7.667 10-7.667v15.979z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M12 .5C5.648.5.5 5.648.5 12s5.148 11.5 11.5 11.5S23.5 18.352 23.5 12 18.352.5 12 .5zM12 2c5.514 0 10 4.486 10 10 0 4.38-2.81 8.086-6.687 9.447.363.111.75.177 1.147.177.514 0 .994-.12 1.423-.333.058-.027.118-.055.175-.084-.037.001-.074.006-.113.006-2.756 0-5.021-1.264-6.945-3.219-1.859 1.947-4.127 3.24-6.945 3.24-.039 0-.077-.005-.113-.006.058.029.118.057.175.084.429.213.909.333 1.423.333.397 0 .784-.066 1.147-.177C4.81 20.086 2 16.38 2 12 2 6.486 6.486 2 12 2zM8.5 14H7V9h1.5v5zm4-3.75V14h-1.5v-1.5h-2.5V14H7V9h1.5v1.5h2.5V9H13v1.5zm6.5 3.75h-1.5v-2.5l-1.5 1.5V9H17v2.5l1.5-1.5h1.5v5z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M20.451 20.451H17.37v-4.51c0-1.075-.02-2.458-1.495-2.458-1.495 0-1.723 1.166-1.723 2.375v4.593H11.561V9.501h2.959v1.497h.042c.412-.78 1.421-1.598 2.922-1.598 3.127 0 3.702 2.061 3.702 4.739v5.312h-.001zM7.042 8.004c-.951 0-1.722-.774-1.722-1.724 0-.951.771-1.722 1.722-1.722s1.722.771 1.722 1.722c0 .951-.771 1.724-1.722 1.724zm1.471 12.447H5.571V9.501h2.942v10.95zM22.225 0H1.775C.792 0 .012.781.012 1.765v20.471C.012 23.219.792 24 1.775 24h20.451c.983 0 1.765-.781 1.765-1.765V1.765C24 .781 23.219 0 22.225 0z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M12 3.5c-2.601 0-2.915.01-3.936.056-1.002.045-1.69.198-2.252.42-.57.227-1.054.53-1.54 1.015-.485.485-.788.97-1.014 1.541-.223.561-.375 1.25-.421 2.252-.046 1.022-.056 1.335-.056 3.937 0 2.601.01 2.915.056 3.936.046 1.002.198 1.691.421 2.252.227.57.529 1.054 1.014 1.54.485.485.97.788 1.54 1.014.561.223 1.25.375 2.252.421 1.022.046 1.335.056 3.936.056s2.915-.01 3.937-.056c1.002-.045 1.691-.198 2.252-.421.57-.227 1.054-.529 1.54-1.014.485-.485.788-.97 1.014-1.54.223-.561.375-1.25.421-2.252.046-1.022.056-1.335.056-3.937 0-2.601-.01-2.915-.056-3.936-.046-1.002-.198-1.691-.421-2.252-.227-.57-.529-1.054-1.014-1.54-.485-.485-.97-.788-1.54-1.014-.561-.223-1.25-.375-2.252-.421-1.022-.046-1.335-.056-3.937-.056zm0 2.026c2.579 0 2.885.01 3.899.054.786.036 1.187.166 1.464.276.339.132.581.29.835.545.254.255.412.497.544.836.11.276.24.677.276 1.464.044 1.014.054 1.32.054 3.899s-.01 2.885-.054 3.899c-.036.786-.166 1.187-.276 1.464-.132.339-.29.581-.544.835-.255.254-.497.412-.836.544-.276.11-.677.24-1.464.276-1.014.044-1.32.054-3.899.054s-2.885-.01-3.899-.054c-.786-.036-1.187-.166-1.464-.276-.339-.132-.581-.29-.835-.544-.254-.255-.412-.497-.545-.836-.11-.276-.24-.677-.276-1.464-.044-1.014-.054-1.32-.054-3.899s.01-2.885.054-3.899c.036-.786.166-1.187.276-1.464.132-.339.29-.581.544-.835.255-.254.497-.412.836-.544.276-.11.677-.24 1.464-.276 1.014-.044 1.32-.054 3.899-.054zm0 2.973a4.501 4.501 0 0 0-4.5 4.5 4.501 4.501 0 0 0 4.5 4.5 4.501 4.501 0 0 0 4.5-4.5 4.501 4.501 0 0 0-4.5-4.5zm0 2.474a2.026 2.026 0 0 1 2.026 2.026A2.026 2.026 0 0 1 12 14.999a2.026 2.026 0 0 1-2.026-2.026A2.026 2.026 0 0 1 12 10.947zm6.913-4.463a1.084 1.084 0 0 1-1.083 1.084A1.084 1.084 0 0 1 16.747 6.5a1.084 1.084 0 0 1 1.083-1.083A1.084 1.084 0 0 1 18.913 6.5z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M12 2.04C6.478 2.04 2.04 6.478 2.04 12c0 4.863 3.658 8.871 8.418 9.795v-6.903H8.1v-2.892h2.358V9.86c0-2.34 1.435-3.615 3.532-3.615 1.003 0 1.865.073 2.115.108v2.446l-1.452.001c-1.137 0-1.361.54-1.361 1.334v1.751h2.717l-.354 2.892h-2.364v6.903c4.761-.924 8.419-4.932 8.419-9.795C21.96 6.478 17.522 2.04 12 2.04z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="dark:bg-gradient-to-b from-gray-900 to-slate-900">
      <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6 py-6'>
        <div className=" justify-between items-center m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className=" w-full justify-start text-gray-600 dark:text-gray-300 sm:w-7/12">
          <a href="#" className="transition hover:text-primary">
                  Opposite to Ghatshila Block Gate, Fuldungri, Ghatshila, East Singhbhum, Jharkhand
                </a>
          </div>
          <div className="flex w-full justify-end text-gray-600 dark:text-gray-300 sm:w-7/12">
            <ul role="list" className=" space-x-8">
            {/* <li>
                <a href="#" className="transition hover:text-primary">
                  Opposite to Ghatshila Block Gate, Fuldungri, Ghatshila, East Singhbhum, Jharkhand
                </a>
              </li> */}
              <li>
                <a href="mailto:us@globalsolutionoverseas.com" className="flex items-center space-x-2 transition hover:text-primary">
                  <MailIcon />
                  <span>us@globalsolutionoverseas.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 transition hover:text-primary">
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 transition hover:text-primary">
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 transition hover:text-primary">
                  <FacebookIcon />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
