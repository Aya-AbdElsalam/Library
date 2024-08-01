import React, { useContext } from "react";
import { AuthorsData } from "../context/AuthorDataApi";
import SectionHead from "./SectionHead";

export default function Authors() {
  const { Authors } = useContext(AuthorsData);

  return (
    <div className="py-20 container" id="Authors">
      <SectionHead p1="Strong Minds Behind Us" p2="Most Popular Authors" />
      <div className="flex gap-3 flex-wrap">
        {Authors?.map((author) => {
          return (
            <div
              className="w-[200px] max-w-[400px] md:max-w-[223px] grow text-center flex flex-col gap-2 group"
              key={author.id}
            >
              <div className="p-1 group-hover:border-2 group-hover:shadow-lg shadow-inner">
                <img
                  src={author.img}
                  alt={`Picture of ${author.name}`}
                  className="h-[152px] w-full bg-borderColor"
                />
              </div>
              <p>{author.name}</p>
              <p className="text-[14px] text-mainText">
                {author.books} Published Books
              </p>
              <div className="flex gap-2 justify-center">
                <div className="w-[30px] h-[30px] p-2 box-border bg-borderColor rounded-full group-hover:bg-blue-900">
                  <img
                    width="100%"
                    height="100%"
                    className="group-hover:invert"
                    src="https://img.icons8.com/fluency-systems-filled/48/facebook-f.png"
                    alt="Facebook"
                  />
                </div>
                <div className="w-[30px] h-[30px] p-2 bg-borderColor rounded-full group-hover:bg-blue-600">
                  <img
                    width="100%"
                    height="100%"
                    className="group-hover:invert"
                    src="https://img.icons8.com/ios-glyphs/30/twitter--v1.png"
                    alt="Twitter"
                  />
                </div>
                <div className="w-[30px] h-[30px] p-2 bg-borderColor rounded-full group-hover:bg-blue-800">
                  <img
                    width="100%"
                    height="100%"
                    className="group-hover:invert"
                    src="https://img.icons8.com/windows/32/linkedin-2.png"
                    alt="LinkedIn"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
