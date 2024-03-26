"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-2xl">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link className="flex-shrink-0" href="/">
            <Image
              className="cursor-pointer"
              src="/images/blogs.png"
              alt=""
              width={60}
              height={100}
            />
          </Link>
          <div className="hidden md:flex md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-gray-500 hover:text-gray-700" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-700"
                    href="/Blogs"
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-700"
                    href="/PhotosGallery"
                  >
                    PhotosGallery
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 hover:text-gray-700"
                    href="/AboutMe"
                  >
                    About-Me
                  </Link>
                </li>

                <li>
                  <Link className="text-gray-500 hover:text-gray-700" href="#">
                    Work With ME
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:gap-4">
              <Link
                className="rounded-md relative left-14 bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="#"
              >
                Login
              </Link>
            </div>
            <div className="block md:hidden">
              <button
                onClick={toggleNavbar}
                className="rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav aria-label="Global">
            <ul className="flex flex-col items-center gap-4 text-sm">
              <li>
                <Link className="text-gray-500 hover:text-gray-700" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700"
                  href="/Blogs"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700"
                  href="/PhotosGallery"
                >
                  PhotosGallery
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 hover:text-gray-700"
                  href="/AboutMe"
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link className="text-gray-500 hover:text-gray-700" href="#">
                  Work With ME
                </Link>
              </li>

              <div className="flex gap-4">
                <Link
                  className="rounded-md  bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
