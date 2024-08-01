import React, { useContext, useEffect } from "react";
import { BooksData } from "../context/BooksDataApi";
import SectionHead from "./SectionHead";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdOutlineAddShoppingCart, MdOutlineFavorite } from "react-icons/md";

export default function Books() {
  const { books } = useContext(BooksData);

  useEffect(() => {
    console.log("Books from context:", books);
  }, [books]);

  return (
    <div className="pt-20 container" id="Books">
      <SectionHead p1="Some Great Books" p2="Bestselling Books" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          0: { slidesPerView: 1 },
          494: { slidesPerView: 2 },
          865: { slidesPerView: 3 },
          1500: { slidesPerView: 4 },
        }}
        className="mySwiper flex gap-3 flex-wrap"
      >
        {books?.map((book) => (
          <SwiperSlide
            key={book.id}
            className="h-auto p-6 bg-borderColor w-[250px] grow flex flex-col gap-3 text-center justify-center group hover:bg-white items-stretch hover:shadow-lg shadow-inner hover:border-b-4 hover:border-mainBg"
          >
            <div className="flex gap-3 overflow-hidden h-[200px]">
              <img
                src={book.img}
                alt={`Cover of ${book.name}`}
                height="200px"
                width="100%"
                className="h-[200px] group-hover:w-[20px] group-hover:m-0"
              />
              <div className="text-[12px] text-left flex-col justify-center w-0 group-hover:w-full flex">
                <p className="mb-3 line-clamp-3">{book.des}</p>
                <p className="font-semibold">Book pages: {book.pages}</p>
                <p className="font-semibold">Category: {book.category}</p>
                <p className="font-semibold">Price: {book.price} $</p>
                <div className="text-[18px] flex gap-3 mt-4">
                  <MdOutlineAddShoppingCart className="bg-secondBg text-white grow py-2 box-content hover:bg-mainBg cursor-pointer" />
                  <MdOutlineFavorite className="bg-secondBg text-white grow py-2 box-content hover:bg-mainBg cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="h-[.5px] bg-mainText w-full"></div>
            <p className="font-bold">{book.name}</p>
            <p className="text-[13px]">By: {book.author}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
