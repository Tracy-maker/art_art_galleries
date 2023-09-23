"use client";

import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
<div className="flex justify-between w-full"></div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
