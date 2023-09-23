"use client";

import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="m"></div>
        </>
      )}
    </Disclosure>
  );
}
