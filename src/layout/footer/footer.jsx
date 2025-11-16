import React from 'react';


import logo from '../../assets/logo.svg';;
import { Twitter } from "../../assets/icons/qushcha.icon.jsx";
import { Pinteres } from "../../assets/icons/chrome.icon.jsx";
import { Insta } from "../../assets/icons/instagram.icon.jsx";
import { Facebook } from "../../assets/icons/fasebook.icon.jsx";

export const Footer = () => {
  return (
    <>
      <section className="max-w-[1920px] mx-auto mt-[120px]">
        <div>
          <div className="flex mb-[102px] justify-center">
            <div className="w-[336px] pr-[51px] border-r border-gray text-end">
              <h5 className="h5 mb-8">Contact Us</h5>
              <p className="list">Email</p>
              <p className="paragraph mb-8">needhelp@Organia.com</p>

              <p className="list">Phone</p>
              <a className="block paragraph mb-8" href="tel:+9998885666999">
                +9998885666999
              </a>

              <p className="list">Address</p>
              <p className="paragraph mb-8">88 road, borklyn street, USA</p>
            </div>

            <div className="w-[543px] mx-[42px]">
              <div className="flex justify-center mb-[23px]">
                <img src={logo} alt="logo" />
              </div>
              <p className="paragraph text-center mb-[49px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>
              <div className="flex justify-center gap-[15px]">
                <span className="p-5 bg-ligthGreen rounded-full">
                  <Insta />
                </span>
                <span className="p-5 bg-ligthGreen rounded-full">
                  <Facebook />
                </span>
                <span className="p-5 bg-ligthGreen rounded-full">
                  <Twitter />
                </span>
                <span className="p-5 bg-ligthGreen rounded-full">
                  <Pinteres />
                </span>
              </div>
            </div>

            <div className="w-[336px] pl-[51px] border-l border-gray">
              <h5 className="h5 mb-8">Utility Pages</h5>
              <p className="paragraph mb-[22px]">Style Guide</p>
              <p className="paragraph mb-[22px]">404 Not Found</p>
              <p className="paragraph mb-[22px]">Password Protected</p>
              <p className="paragraph mb-[22px]">Licences</p>
              <p className="paragraph mb-[22px]">Changelog</p>
            </div>
          </div>
          <div>
            <p className="pb-5 pt-[17px] font-secondary font-normal text-dark text-center text-[18px] border-t border-gray">
              Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b>{" "}
              Templates - Powered by <b>Webflow</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
