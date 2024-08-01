import React from "react";

export default function FooterTop() {
  return (
    <div className="bg-borderColor">
      <div className="container py-12 border-t border-mainText">
        <img
          width="218px"
          height="46px"
          src="http://exprostudio.com/html/book_library/images/logo.png"
          alt="Book Library Logo"
          className="mx-auto sm:mx-0"
        />
        <div className="flex gap-5 flex-wrap mt-10">
          <div className="flex gap-3 items-center w-[250px] grow">
            <img
              width="30"
              height="30"
              className="w-[30px] h-[30px]"
              src="https://img.icons8.com/external-creatype-two-colour-colourcreatype/64/external-bulding-science-education-two-colour-creatype-two-colour-colourcreatype.png"
              alt="Building Icon"
            />
            <div className="text-[14px]">
              <p>Suit # 07, Rose World Building,</p>
              <p>Street # 02, AT246T Manchester</p>
            </div>
          </div>
          <div className="flex gap-3 items-center w-[250px] grow">
            <img
              width="30"
              height="30"
              className="w-[30px] h-[30px]"
              src="https://img.icons8.com/ios/50/phone--v1.png"
              alt="Phone Icon"
            />
            <div className="text-[14px]">
              <p>0800 12345 - 678 - 89</p>
              <p>+4 1234 - 4567 - 67</p>
            </div>
          </div>
          <div className="flex gap-3 items-center w-[250px] grow">
            <img
              width="30"
              height="30"
              className="w-[30px] h-[30px]"
              src="https://img.icons8.com/dotty/80/clock.png"
              alt="Clock Icon"
            />
            <div className="text-[14px]">
              <p>Serving 7 Days A Week From 9am - 5pm</p>
            </div>
          </div>
          <div className="flex gap-3 items-center w-[250px] grow">
            <img
              width="30"
              height="30"
              className="w-[30px] h-[30px]"
              src="https://img.icons8.com/material-outlined/24/new-post.png"
              alt="Email Icon"
            />
            <div className="text-[14px]">
              <p>support@domain.com</p>
              <p>info@domain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
