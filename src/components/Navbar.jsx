import React from 'react';
import { Link } from 'react-router-dom';

import NavItems from '../data';

function Navbar() {
  const items = NavItems.map((item) => (
    <li className="mr-20 list-item list-none">
      <Link to={`${item.toLowerCase()}`}><a href="/" className="no-underline">{item}</a></Link>
    </li>
  ));

  return (

    <div className="sticky top-0">
      <div className="nav-wrapper relative bg-white py-8 z-50 font-semibold text-gray-800">
        <div className="mx-auto px-24">
          <div className="header-wrapper flex justify-between items-center">
            <div className="header-left font-black text-3xl">
              <a href="/">B</a>
            </div>
            <div className="header-center">
              <nav role="navigation" className="hidden relative float-right lg:block">
                <ul className="flex pl-0 justify-end my-0 items-center list-none">
                  {items}
                </ul>
              </nav>
              <div className="menu-button lg:hidden w-16 h-16 p-0 rounded-full bg-indigo-900 text-white text-3xl">
                <div className="menu-button-main-wrapper">
                  <div className="menu-button-wrapper">
                    <div className="menu-icon-line-top transform-gpu translate-x-0 translate-y-0 scale-100 rotate-0 skew-x-0 skew-y-0 w-7 h-2 p-0 rounded-xl bg-white" />
                    <div className="menu-icon-line-top" />
                    <div className="menu-icon-line-top" />
                  </div>
                </div>
              </div>
            </div>
            <div className="header-left">
              <a href="mailto:shubham.0638@gmail.com" className="no-underline">
                <span className="mx-1.5 font-bold text-xl underline">M</span>
                shubham.0638@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

    </div>

  );
}

export default Navbar;
