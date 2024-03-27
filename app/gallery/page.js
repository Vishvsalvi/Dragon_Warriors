"use client";
import React, {useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {

    useEffect(() => {
        AOS.init({duration: 3000})
    }, []);


    const images = [
        "/Images/Image1.jpg",
        "/Images/Image2.jpg",
        "/Images/Image3.jpg",
        "/Images/Image4.jpg",
        "/Images/Image5.jpg",
        "/Images/Image6.jpg",
        "/Images/Image7.jpg",
        "/Images/Image8.jpg",
        "/Images/Image9.jpg",
    ]

  return (
    <div>
      <section className="bg-neutral-950 pt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div data-aos="fade-down" className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Inspiring Athlete Moments
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
            Through powerful images and inspiring stories, experience the joy and sense of accomplishment that comes from pursuing athletic excellence.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {images.map((image, index) => (
                    <div key={index} className="relative">
                    <img
                        className="h-80 w-full object-cover rounded-lg hover:cursor-zoom-out transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                        src={image}
                        alt=""
                    />
                    </div>
                ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
