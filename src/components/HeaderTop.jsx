import React from "react";
import { IoMdSearch, IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function HeaderTop() {
  return (
    <div className="bg-white  py-[30px] border-y border-gray-300" id="Home">
      <div className="container flex justify-between gap-6 flex-wrap">
        <img
          width="218px"
          height="46px"
          src="http://exprostudio.com/html/book_library/images/logo.png"
          alt="logo"
        ></img>
        <div className="flex grow gap-3 flex-wrap">
          <div className="flex p-2 border-gray-300  border rounded-md items-center text-mainText grow">
            {" "}
            <input
              placeholder="Search by Title / Author "
              className=" focus:outline-0 text-[14px] grow"
            />
            <IoMdSearch className="text-[20px]" />
          </div>{" "}
          <div className="flex gap-3 text-[14px] items-center max-[444px]:bg-mainBg max-[444px]:grow max-[444px]:py-3 max-[444px]:justify-center max-[444px]:text-white">
            <div className="flex gap-3">
              <IoIosHeartEmpty className="text-[20px]" />
              <p>Whishlist</p>
            </div>
            <p> |</p>
            <div className="flex gap-3">
              <MdOutlineShoppingCart className="text-[20px]" />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
