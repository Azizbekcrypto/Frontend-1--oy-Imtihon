import React from 'react';
import footBan from '../../assets/images-png/FootBan.png';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export const Footer = () => {
  return (
    <>
      <section className="container mt-16">
        <div
          className="bg-cover bg-center rounded-3xl p-14 flex items-center justify-between"
          style={{ backgroundImage: `url(${footBan})` }}
        >
          <h2 className="text-5xl font-bold text-white">
            Subscribe to <br /> our Newsletter
          </h2>

          <div className="flex mt-6 md:mt-0 w-full max-w-lg bg-white rounded-full p-2">
            <input
              type="text"
              placeholder="Your Email Address"
              className="flex-1 px-4 outline-none"
            />
            <button className="bg-[#274C5B] text-white px-6 py-3 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="container mt-20 pb-10">
        <div className="grid grid-cols-3 gap-10 relative">
          <div className="flex flex-col items-end">
            <h3 className="text-[30px] font-bold mb-4">Contact Us</h3>

            <p className="text-[18px] font-semibold">Email</p>
            <p className="text-MainGrey mb-3">needhelp@Organia.com</p>

            <p className="text-[18px] font-semibold">Phone</p>
            <p className="text-MainGrey mb-3">666 888 888</p>

            <p className="text-[18px] font-semibold">Address</p>
            <p className="text-MainGrey">88 road, borklyn street, USA</p>
          </div>

          <span className="hidden md:block absolute left-1/3 top-0 h-full border-l"></span>
          <span className="hidden md:block absolute right-1/3 top-0 h-full border-l"></span>

          <div className="flex flex-col items-center md:items-center text-center px-4">
            <Link to={'/'}>
              <img src={Logo} alt="Organick Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-MainGrey font-second-family mt-2">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing.
            </p>
            <div className="flex gap-4 mt-6">
              <a className="p-3 bg-gray-100 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.15 6.82 9.49.5.09.68-.22.68-.48 0-.24-.01-.86-.01-1.68-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.84c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.68.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85 0 1.33-.01 2.41-.01 2.74 0 .27.18.58.69.48a10 10 0 006.82-9.49c0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>

              <a className="p-3 bg-gray-100 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.5a2.04 2.04 0 110-4.08 2.04 2.04 0 010 4.08zM20.45 20.45h-3.53v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.39V9h3.39v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.59 0 4.25 2.36 4.25 5.43v6.32z" />
                </svg>
              </a>

              <a className="p-3 bg-gray-100 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c-5.45 0-9.837 4.387-9.837 9.837 0 4.343 2.835 8.023 6.703 9.33.49.09.67-.213.67-.475 0-.235-.01-.858-.014-1.685-2.725.592-3.3-1.313-3.3-1.313-.446-1.134-1.09-1.437-1.09-1.437-.892-.61.068-.598.068-.598 1 .07 1.528 1.03 1.528 1.03.876 1.502 2.30 1.068 2.86.82.09-.635.34-1.066.62-1.313-2.17-.25-4.46-1.08-4.46-4.92 0-1.085.39-1.98 1.03-2.67-.11-.27-.48-1.3.09-2.68 0 0 .82-.26 2.71 1.02.78-.22 1.62-.33 2.46-.33.84 0 1.68.11 2.47.33 1.89-1.27 2.71-1.02 2.71-1.02.57 1.38.20 2.41.1 2.68.64.69 1.03 1.58 1.03 2.67 0 3.85-2.29 4.67-4.48 4.92.35.30.67.92.67 1.84 0 1.33-.01 2.39-.01 2.72 0 .27.18.57.67.47a9.84 9.84 0 006.71-9.32c0-5.45-4.39-9.84-9.84-9.84z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="text-[30px] font-bold mb-4">Utility Pages</h3>
            <ul className="text-MainGrey font-second-family leading-[270%]">
              <li>Style Guide</li>
              <li>404 Not Found</li>
              <li>Password Protected</li>
              <li>Licences</li>
              <li>Changelog</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        Copyright © <span className="font-bold">Organick</span> | Designed by
        VictorFlow Templates – Powered by Webflow
      </div>
    </>
  );
};