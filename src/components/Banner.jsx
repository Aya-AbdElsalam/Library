import React from "react";
import groupOfBooks from "../assets/groupOfBooks.png";
import bgBanner from "../assets/bgBanner.jpg";

export default function Banner() {
  return (
    <section
      className="min-h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      <div className="container flex flex-col gap-7 py-20 justify-center items-center">
        <img
          src={groupOfBooks}
          alt="Group of books"
          width="750"
          height="auto"
        />
        <h1 className="text-[50px] text-white text-center font-bold max-[444px]:text-[33px]">
          Search Your Favourite Book
        </h1>
        <div className="h-1 bg-white w-40"></div>
        <p className="text-[24px] text-center text-white max-[444px]:text-[20px]">
          Consectetur adipisicing elit, eiusmod lotanae pokalate sinote tempor
          incididunt ut labore popouye asoter.
        </p>
        <button className="bg-mainBg text-white font-bold hover:bg-black p-3 min-w-52 text-center">
          Buy Now
        </button>
      </div>
    </section>
  );
}
