"use client";

import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
                    className=" object-cover"
                    width={220}
                    height={220}
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
                        ? "border-blue-400 h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }`}
                  >
                    ABOUT ME
                  </Link>

                  <Link
                    href="/galleries"
                    prefetch
                    className={`${
                      pathname === "/galleries"
                        ? "border-blue-400 h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }`}
                  >
                    Galleries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
