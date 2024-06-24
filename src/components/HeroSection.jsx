import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-normal">
        The Gemini India
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          You’re Partner in Building Innovative Digital Healthcare Solutions
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-100 max-w-1xl tracking-norma">
      Get the most out of your hospital's IT investment. We work with healthcare leaders and 
      providing healthcare software solutions across the world to care for more people, in better ways
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Book a Free Demo Now
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-5 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-4 my-6"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-4 my-6"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  )
}

export default HeroSection