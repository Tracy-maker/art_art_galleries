"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Image
                    className=" object-cover"
                    width={150}
                    height={150}
                    src="https://i.ibb.co/XYJyrrT/Wechat-IMG6483.png"
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
                  >About</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
