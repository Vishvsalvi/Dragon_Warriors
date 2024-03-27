"use client";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const membersAndCoaches = [
    {
      name: "Jyotiraditya Vijay Kakde",
      rank: ["2nd DAN Black Belt, Kukkiwon", "National Referee - TFI registered", "State Medallist", "Taekwondo coach and fitness trainer"],
      img: "/Images/Coach2.png",
    },
    {
      name: "Tanish Milind Malwankar",
      rank: ["2nd DAN Black Belt, Kukkiwon", "National Referee - TFI registered", "National Medallist", "National Games Player Goa - 2023", "Taekwondo coach and fitness trainer"],
      img: "/Images/Coach1.png",
    },
    {
      name: "Dhara Anilkumar Dhanak",
      rank: ["1st Dan Black Belt, Kukkiwon", "National Player", "National Referee - TFI registered", "Taekwondo Coach and fitness trainer"],
      img: "/Images/Coach3.png",
    },
];

  const management = [
    {
      name: "Prasad Rajaram Ghadi",
      rank: ["National Referee", "TFI registered" ,"Vice President of Taekwondo Association of Palghar District (TAPD)"],
      img: "/Images/Management3.png",
    },
    {
      name: "Yogeshkumar T Singh",
      rank: ["2nd DAN Black Belt", "Kukiwan", "National Referee", "TFI Register","Official Member of Vasai Taluka Kala-Krida"],
      img: "/Images/Management2.png",
    },
    {
      name: "Paresh Subhash Raut",
      rank: ["3rd DAN Black Belt, Kukiwan","National Referee", "TFI Register","Member of Taekwondo Association of Palghar District (TAPD) Official Member of Vasai Taluka Kala-Krida"],
      img: "/Images/Management1.png",
    }
  ]

  return (
    <div>
      <section className="py-10 bg-neutral-950">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div
              data-aos="fade-left"
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full "
            >
              <img
                alt="hero"
                src="/Images/Hero.png"
                className="absolute inset-0 h-full w-full object-contain rounded-lg"
              />
            </div>

            <div data-aos="fade-right" className="lg:py-24">
              <h2 className="text-3xl text-red-600 font-bold sm:text-4xl">
                About Dragon Warrior
              </h2>

              <p className="mt-4 text-white">
                Established in 2013 near Old Viva College in Ganapati Mandir,
                Dragon Warrior has been dedicated to fostering physical fitness
                and competitive spirit among school and college students.
                <br />
                <br />
                Beginning with Taekwondo, Dragon Warrior has expanded its
                offerings to include fitness training (GYM), self-defense, yoga,
                mixed martial arts (MMA), and Qwankido martial arts. The
                academy's commitment to excellence has resulted in the
                development of 24 black belts, 8 national referees, 6 trainers
                (coaches), and numerous national and international medalists.
                Dragon Warrior also offers the SAI diploma physical training
                course, equipping students with valuable qualifications.
                <br />
                <br />
                With four training halls (Dojangs) in the Vasai-Virar region,
                Dragon Warrior stands as a leading force in youth development
                through martial arts and fitness training.
              </p>
            </div>
          </div>
        </div>

        <div  className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-red-600 sm:text-5xl">
            Discover the Backbone of Our Academy
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Meet the People Who Make It Happen.
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-center pt-[8rem]">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            Coaches
          </h2>

        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {membersAndCoaches.map((member, index) => {
              const { name, rank, img } = member;

              if (index % 2 === 0) {
                return (
                  <div key={index} className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div data-aos="fade-right" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img
                      
                          className="object-cover object-center rounded shadow-[0_20px_50px_rgba(225,0,0_0.7)] transition hover:shadow-red-500/10"
                          alt="hero"
                          src={img}
                      />
                  </div>
                  <div data-aos="fade-left"  className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
                          {name}
                      </h1>
                      <div className="mb-8 leading-relaxed text-left text-white">
                          <ul className="list-disc list-inside">
                              {rank.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))}
                          </ul>
                      </div>
                     
                  </div>
              </div>
              
                );
              } else {
                return (
                  <div key={index} className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div data-aos="fade-right" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
                          {name}
                      </h1>
                      <div   className="mb-8 leading-relaxed text-left">
                          <ul className="list-disc text-white list-inside">
                              {rank.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))}
                          </ul>
                      </div>
                     
                  </div>
                  <div data-aos="fade-right" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                      <img
                          className="object-cover object-center rounded shadow-[0_20px_50px_rgba(225,0,0_0.7)] transition hover:shadow-red-500/10"
                          alt="hero"
                          src={img}
                      />
                  </div>
              </div>
              
                );
              }
            })}
          </div>
        </section>
        <div className="mx-auto max-w-3xl text-center pt-[8rem]">
          <h2 className="text-5xl font-bold text-white sm:text-5xl">
            Management
          </h2>

        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {management.map((member, index) => {
              const { name, rank, img } = member;

              if (index % 2 === 0) {
                return (
                  <div key={index} className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div data-aos="fade-right" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                      <img
                          className="object-cover object-center rounded shadow-[0_20px_50px_rgba(225,0,0_0.7)] transition hover:shadow-red-500/10"
                          alt="hero"
                          src={img}
                      />
                  </div>
                  <div data-aos="fade-left"  className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
                          {name}
                      </h1>
                      <div className="mb-8 leading-relaxed text-left text-white">
                          <ul className="list-disc list-inside">
                              {rank.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))}
                          </ul>
                      </div>
                     
                  </div>
              </div>
              
                );
              } else {
                return (
                  <div key={index} className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div data-aos="fade-right" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-600">
                          {name}
                      </h1>
                      <div   className="mb-8 leading-relaxed text-left">
                          <ul className="list-disc text-white list-inside">
                              {rank.map((item, index) => (
                                  <li key={index}>{item}</li>
                              ))}
                          </ul>
                      </div>
                     
                  </div>
                  <div data-aos="fade-right" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                      <img
                          className="object-cover object-center rounded shadow-[0_20px_50px_rgba(225,0,0_0.7)] transition hover:shadow-red-500/10"
                          alt="hero"
                          src={img}
                      />
                  </div>
              </div>
              
                );
              }
            })}
          </div>
        </section>
      </section>
    </div>
  );
}
