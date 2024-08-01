import React from "react";

export default function SectionHead({ p1, p2 }) {
  return (
    <>
      <p>{p1}</p>
      <h2 className="text-[30px] font-bold">{p2}</h2>
      <div className="bg-borderColor w-[100%] h-[1px] my-5"></div>
    </>
  );
}
