import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-primary text-white p-5 text-center flex justify-between items-center lg:w-5/6 mx-auto h-96 overflow-hidden rounded-3xl">
      <div className="flex-1">
        <h1 className="text-4xl m-0 uppercase">DESCUENTO</h1>
        <p className="text-8xl m-0 uppercase font-bold">30%</p>
      </div>
      <div className="flex-1 relative">
        <img
          src="/cancun.jpg"
          alt="Banner Image"
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute bottom-0 right-0 ">
          <h1 className="text-4xl uppercase">Cancun</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
