"use client";
import Link from "next/link";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({duration: 3000})
  }, [])

  const features = [
    {
      id: 1,
      title: "Expert Instruction",
      description: " Our team of expert instructors brings years of training and competition experience to every class, ensuring you receive top-notch guidance and support on your Taekwondo journey.",
      image: "/Images/taekwondo.png"
    },
    {
      id: 2,
      title: "Comprehensive Curriculum",
      description: "Our academy offers a comprehensive curriculum that covers all aspects of Taekwondo, including forms, sparring, self-defense, and traditional techniques",
      image: "/Images/power-fight.png"
    }, 
    {
      id: 3,
      title: "Exciting Tournament Opportunities",
      description: "We provide opportunities for students to participate in local, regional, and national tournaments, where they can showcase their skills, test their abilities, and compete against other martial artists.",
      image: "/Images/championship.png"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Paul Starr",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",

    },
    {
      id: 2,
      name: "Paul Starr",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",

    },
    {
      id: 3,
      name: "Paul Starr",
      review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    }
  ]

  const images = ["/Images/Image4.jpg", "/Images/Image11.jpg", "Images/Image12.jpg", "Images/Image10.jpg"]

  return (  
    <main className="bg-neutral-950 overflow-hidden">
      {/* Hero section */}

      <section className="md:py-20 py-9  bg-neutral-950">

      <div>
        {/* // 50% on small screens and 33% on larger screens. */}

        <Carousel
          opts={{
            align: "start",
            loop: true,

            items: 1, // Set the number of items to display to 1
          }}
          className="sm:mx-16 mx-[2.95rem]" // Set the height to 75% of the screen
        >
          <CarouselContent className="rounded-md" >
            {images.map((item, index) => (
              <CarouselItem key={index} className="md:w-1/1 lg:w-1/1 rounded-md">
                <img
                  alt="Slide"
                  src={item}
                  // style={{ width: "100%", objectFit: "cover" }}
                  className="md:w-full h-[28rem] md:h-[23rem] lg:h-[35rem] xl:h-[42rem] object-contain rounded-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      </section>

      <section  >
        <div  className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-12 lg:px-8 lg:py-28 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div data-aos="fade-left" className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Fight"
                src="/Images/tkd-hero-1.jpg"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-24" data-aos="fade-right" >
              <h2 className="text-3xl text-red-600 font-bold sm:text-4xl" >
              Taekwondo
              </h2>

              <p className="mt-4 text-white  ">
              Taekwondo, originating from ancient Korean martial arts, is a vibrant combat form known for its swift kicks and emphatic punches. Beyond being a sport, Taekwondo embodies a rich moral code, emphasizing values like loyalty, respect, and an indomitable spirit.
              <br />
              <br />
              At our academy, we celebrate the global reach of Taekwondo, with over 35 million participants worldwide and representation in 150 national bodies under the World Taekwondo Federation. Since its inclusion in the Olympic Games in 2000, Taekwondo has gained widespread recognition as a competitive and esteemed martial art.

              <br />
              <br />
              We recognize proficiency through a structured belt system, with the black belt representing the pinnacle of achievement. Our training encompasses various aspects of competitive Taekwondo, including sparring, Poomsae (forms), self-defense, and break tests.
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
 <section className=" ">
  <div data-aos="fade-up" className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-28">

    <div  className="mx-auto max-w-lg text-center">
      <h2 className="text-4xl font-bold sm:text-4xl text-red-600">Discover What Sets Us Apart</h2>

      <p className="mt-4 text-white">
      Explore the unique features that make our Taekwondo Academy stand out from the rest.
      </p>
    </div>

    <div  className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    
    {
      features.map((feature, index) => (
        <div
        key={index}
        className="block rounded-xl bg-neutral-900 border border-gray-800 p-8 shadow-xl transition hover:border-red-500/10 hover:shadow-red-500/10"
        href="/services/digital-campaigns"
      >
        <img className="h-20 w-20 mx-auto" src={feature.image} alt="Digital Campaigns" />
        <h2 className="mt-4 text-xl font-bold text-white">{feature.title}</h2>

        <p className="mt-1 text-sm text-gray-300">
          {feature.description}
        </p>
      </div>
      ))
    }
   


    
    </div>

 
  </div>
</section>

{/* Testimonial section */}

{/* <section className="bg-neutral-950">
  <div data-aos="fade-up" className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <h2 className="text-center text-4xl font-bold tracking-tight text-red-600 sm:text-4xl">
      Read reviews from our students
    </h2>

    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
     
     {
        testimonials.map((testimonial, index) => (
          <blockquote key={index} className="rounded-lg border bg-neutral-900 border-gray-800 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="h-14 w-14 rounded-full object-cover"
            />
  
            <div>
              
  
              <p className="mt-0.5 text-lg font-medium text-white">
  
                {testimonial.name}
              </p>
            </div>
          </div>
  
          <p className="mt-4 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
            consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
            error officiis atque voluptates magnam!
          </p>
        </blockquote>
        ))
     }
 
    </div>
  </div>
</section> */}


    </main>
  );
}
