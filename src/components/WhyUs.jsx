import React from "react";

export default function WhyUs() {
  return (
    <div className="border-t-2 border-mainBg bg-borderColor py-12">
      <div className="container flex gap-10 flex-wrap items-center justify-center">
        <div className="flex gap-3 items-center w-[200px]">
          <img
            className="w-[30px] h-[30px]"
            src="https://img.icons8.com/color-glass/48/rocket--v1.png"
            alt="rocket"
          />
          <div>
            <p className="text-[18px] font-bold">Fast Delivery</p>
            <p className="text-[13px]">Shipping Worldwide</p>
          </div>
        </div>
        <div className="flex gap-3 items-center w-[200px]">
          <img
            className="w-[30px] h-[30px]"
            src="https://img.icons8.com/color/48/discount--v1.png"
            alt="discount"
          />
          <div>
            <p className="text-[18px] font-bold">Open Discount</p>
            <p className="text-[13px]">Offering Open Discount</p>
          </div>
        </div>
        <div className="flex gap-3 items-center w-[200px]">
          <img
            className="w-[30px] h-[30px]"
            src="https://img.icons8.com/emoji/48/leaf-fluttering-in-wind.png"
            alt="leaf"
          />
          <div>
            <p className="text-[18px] font-bold">Eyes On Quality</p>
            <p className="text-[13px]">Publishing Quality Work</p>
          </div>
        </div>
        <div className="flex gap-3 items-center w-[200px]">
          <img
            className="w-[30px] h-[30px]"
            src="https://img.icons8.com/neon/96/like.png"
            alt="like"
          />
          <div>
            <p className="text-[18px] font-bold">24/7 Support</p>
            <p className="text-[13px]">Serving Every Moment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
