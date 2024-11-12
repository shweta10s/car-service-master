/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useContext } from 'react';
import Link from "next/link";

export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  
  const categ = [
    {
        name:'Home',
        cat:'Home',
        link:'/'
    },
    {
        name:'Our-Service',
        cat:'our-service',
        link:'/our-service'
    },
    {
        name:'Pricing',
        cat:'pricing',
        link:'/pricing-plan'
    },
    {
        name:'Blogs',
        cat:'blogs',
        link:'/blogs'
    },
    {
        name:'About us',
        cat:'about-us',
        link:'/about-us'
    },
    {
        name:'Contact Us',
        cat:'contact-us',
        link:'/contact-us'
    },
]

  return (
    <>
      <div className="text-center">
        <button
          className=""
          type="button"
          onClick={toggleDrawer}
        >
          <IoMenu className="text-xl" />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 h-full p-4 overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white w-64 dark:bg-[#222222]`}
      >
       <div className="flex items-center mb-4">
       <img
            src="/assests/logo.png"
            alt="BestAutoRepair Logo"
            className="md:h-8 sm:h-8 h-6 w-auto"
          />
        </div>
        <button
          type="button"
          onClick={toggleDrawer}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <RxCross1 className="text-white" />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {
              categ.map((ele,i) => (
              <li key={i}>
                <Link href={ele.link}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-orange-100 dark:hover:bg-primary-main group cursor-pointer `} >
                  <span className="ms-3">{ele.name}</span>
                </Link>
              </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}