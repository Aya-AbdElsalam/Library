import React, { useEffect, useState } from "react";

export default function HeaderBottom() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 452) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-mainBg sticky top-0 z-50 py-2 md:py-0">
      <div className="container mx-auto flex items-center justify-between">
        <img
          width="27"
          height="50"
          src="https://img.icons8.com/ios-filled/50/menu--v1.png"
          alt="Menu Icon"
          className="md:hidden ml-8 invert cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <ul
          className={`${
            open ? "block" : "hidden"
          } md:flex md:gap-3 md:items-center md:justify-center md:w-full bg-mainBg md:bg-transparent absolute md:static left-0 top-[33px] md:top-0 z-50 md:z-auto w-full`}
        >
          <li className="border-t md:border-0">
            <a
              href="#Home"
              className="text-white p-4 font-bold block hover:bg-secondBg text-[14px] md:inline-block"
            >
              Home
            </a>
          </li>
          <li className="border-t md:border-0">
            <a
              href="#Books"
              className="text-white p-4 font-bold block hover:bg-secondBg text-[14px] md:inline-block"
            >
              Books
            </a>
          </li>
          <li className="border-t md:border-0">
            <a
              href="#Reviews"
              className="text-white p-4 font-bold block hover:bg-secondBg text-[14px] md:inline-block"
            >
              Reviews
            </a>
          </li>
          <li className="border-t md:border-0">
            <a
              href="#Authors"
              className="text-white p-4 font-bold block hover:bg-secondBg text-[14px] md:inline-block"
            >
              Authors
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
