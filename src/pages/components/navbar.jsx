/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DrawerComponent from "./drawer-comp";
import { RouteContext } from "@/context/context";

const Navbar = () => {
  const { PopupOpen } = useContext(RouteContext);
  
  const path = usePathname();
  const nav = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "/our-service",
    },
    {
      name: "Pricing Plan",
      link: "/pricing-plan",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <nav className="bg-white dark:bg-[#222222] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-6 p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/assests/logo.png"
            alt="BestAutoRepair Logo"
            className="md:h-10 sm:h-8 h-6 w-auto"
          />
        </Link>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div
           onClick={PopupOpen}
            className="text-white bg-primary-main cursor-pointer hover:bg-primary-main focus:ring-4 focus:outline-none focus:ring-primary-main font-medium rounded-lg text-base px-4 py-2 text-center dark:bg-primary-main dark:hover:bg-primary-main dark:focus:ring-primary-main md:inline hidden"
          >
            Make an Appointment
          </div>
          
        <div className="md:hidden">
          <DrawerComponent />
        </div>
        </div>
        
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {nav.map((ele, i) => (
              <li key={i}>
                <Link
                  href={ele.link}
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-main md:p-0 md:dark:hover:text-primary-main dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-semibold lg:text-lg md:text-sm ${path === ele.link ? "text-primary-main" : "dark:text-white"}`}
                >
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
