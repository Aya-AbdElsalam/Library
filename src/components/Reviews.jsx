import React, { useContext } from "react";
import { ReviewsData } from "../context/ReviewsDataApi";
import bgReview from "../assets/reviewsBg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewQuote from "../assets/icons8-quote-24.png";

export default function Reviews() {
  const { reviews } = useContext(ReviewsData);

  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${bgReview})` }}
      id="Reviews"
    >
      <div className="container">
        <Swiper
          className="min-h-[80vh] py-6 flex justify-center items-center"
          spaceBetween={50}
          slidesPerView={1}
        >
          {reviews?.slice(1).map((review) => (
            <SwiperSlide
              key={review.id}
              className="flex justify-center flex-col items-center gap-8"
            >
              <div className="relative">
                <div className="absolute top-0 right-0 rounded-full bg-mainBg w-[50px] h-[50px] text-white z-10 text-center flex items-center justify-center">
                  <img src={reviewQuote} alt="quote icon" />
                </div>
                <img
                  src={review.img}
                  alt={review.name}
                  className="rounded-full border-[6px] border-mainBg h-[135px] w-[135px]"
                />
              </div>
              <p className="text-mainText leading-7 text-center">
                {review.review}
              </p>
              <div className="bg-slate-300 w-48 h-[1px]"> </div>
              <div className="text-center">
                <h3 className="font-bold text-[18px]">{review.name}</h3>
                <p className="text-[14px]">{review.job}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
