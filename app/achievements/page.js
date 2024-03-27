import React from "react";

function Achievements() {
  const images = [
    "/Images/Image4.jpg",
    "/Images/Image11.jpg",
    "Images/Image12.jpg",
    "Images/Image10.jpg",
  ];

  const imagesAndDescriptions = [
    {
      id: 1,
      image: "/Images/Image4.jpg",
      description:
        "Open International Taekwondo Championship at Kolkata as Best Team and Best Fighter trophy in 2023.",
    },
    {
      id: 2,
      image: "/Images/Image11.jpg",
      description:
        "Poomsae Second place trophy at Pune Balewadi Stadium, in Sub-Junior Taekwondo State Championship 2023-2024",
    },
    {
      id: 3,
      image: "/Images/Image12.jpg",
      description:
        "Vasai Taluka Kala Krida Taekwondo Championship Achievement in 2023",
    },
    {
      id: 4,
      image: "/Images/Image10.jpg",
      description:
        "Open State Taekwondo Championship Second place trophy at Mumbai in 2023.",
    },
  ];

  return (
    <div>
      <section className="bg-neutral-950 pt-20">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div data-aos="fade-down" className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Building Champions, One Kick at a Time
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              See how our students translate Taekwondo discipline into
              real-world triumphs.
            </p>
          </div>

          <div className=" my-10">
            {imagesAndDescriptions.map(({ id, image, description }) => (
              <div
                className="flex flex-col items-center justify-center my-10"
                key={id}
              >
                <img
                  src={image}
                  alt="Image1"
                  className="w-full object-fit rounded-lg transition duration-300 ease-in-out transform hover:shadow-2xl"
                />
                <p className="text-center text-white sm:text-xl mt-4">
                  {description}
                </p>  
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Achievements;
