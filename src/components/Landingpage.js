import React from "react";

const Landingpage = () => {
  return (
    <div className="bg-black h-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="space-y-10 px-4 sm:px-14 w-full sm:w-[700px] pt-20 flex flex-col justify-center items-center sm:items-start">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-white font-semibold text-2xl sm:text-3xl uppercase">
            Looking for the best tips?
          </h2>
          <h1 className="uppercase text-white text-4xl sm:text-6xl font-bold">
            <span className="text-[#FF1414] text-5xl sm:text-7xl font-bold uppercase">
              Tips
            </span>{" "}
            & tricks
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold uppercase text-white">
            that will blow your mind
          </h1>
          <h2 className="font-semibold text-2xl sm:text-3xl text-white uppercase">
            Only at our platform
          </h2>
        </div>
        <div className="w-full sm:w-[350px] rounded-md px-6 sm:px-10 py-4 pt-5 mt-5 uppercase bg-black shadow-[inset_0px_0px_20px_10px_rgba(255,20,20,0.6)]">
          <h1 className="font-bold text-2xl sm:text-4xl text-white text-center">
            Exclusively
          </h1>
          <h1 className="text-[#FF1414] font-bold text-2xl sm:text-3xl text-center">
            For you, Click below!
          </h1>
        </div>

        <div className="pt-4 flex justify-center">
          <a
            href="https://arcadewonder.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold uppercase text-white text-lg sm:text-3xl border-[#FEB843] border px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-b from-[#feb843] to-[#FF1414] animate-blinkShadow"
          >
            Whatsapp Now
          </a>
        </div>
      </div>

      <div className="w-full h-auto">
        <img
          className="object-cover w-full h-full rounded-md"
          src="/side-view-gamer-playing-with-controller.jpg"
          alt="Gamer playing"
        />
      </div>
    </div>
  );
};

export default Landingpage;
