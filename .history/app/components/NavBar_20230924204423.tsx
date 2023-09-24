"use client";

import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon,Bars4Icon} from "@heroicons/react/20/solid";

export default function Navbar() {
  let pathname = usePathname() || "/";
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Image
                    className="object-cover"
                    width={350}
                    height={210}
                    src="https://i.ibb.co/tcTYJh0/Wechat-IMG6490.png"
                    alt="Logo"
                  />
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link
                    href="/"
                    prefetch
                    className={`${
                      pathname === "/"
                        ? "border-blue-400 h-full inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                        : "border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                    }`}
                  >
                    ABOUT ME
                  </Link>

                  <Link
                    href="/galleries"
                    prefetch
                    className={`${
                      pathname === "/galleries"
                        ? "border-blue-400 h-full inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                        : "border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium"
                    }`}
                  >
                    GALLERIES
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:ring-teal-500 dark:hover:bg-gray-800">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                prefetch
                className={`${
                  pathname === "/"
                    ? "bg-blue-50 border-blue-500 text-blue-500  block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-blue-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700"
                }`}
              >
                HOME
              </Link>
            </div>

            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/projects"
                prefetch
                className={`${
                  pathname === "/projects"
                    ? "bg-blue-50 border-blue-500 text-blue-500  block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-blue-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                }`}
              >
                PROJECTS
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
