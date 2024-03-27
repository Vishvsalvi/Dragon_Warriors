"use client"
import React, {useState} from "react";
import z from "zod";
import { useToast } from "@/components/ui/use-toast"


export default function Contact() {

  const {toast} = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [aadhar, setAadhar] = useState("");


  
  const validateForm = (e) => {
    e.preventDefault();

    const schema = z.object({
      name: z.string().min(1, { message: "Name is required" }),
      email: z.string().email({ message: "Invalid email address" }),
      phone: z.string().length(10, { message: "Phone number must be 10 digits" }),
      date: z.string().min(1, { message: "Date of birth is required" }),
      aadhar: z.string().length(12, { message: "Invalid Aadhar number" }),
    });
    

    const result = schema.safeParse({name, email, phone, date, aadhar});

    if (!result.success) {
      toast(
        {
          variant: "destructive",
          title: "Error !",
          description: result.error.errors[0].message,
          status: "error",
         
        }
      );
     
     
      return false;
    } else {
      
      toast(
        {
          
          title: "Success👋",
          description: "Form submitted successfully",
          status: "success",
         
        }
      )

      return true;
    }
    
  }

 
  


  return (
    <div>
      <section className="text-white body-font relative py-5 bg-neutral-950">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
              Please fill out the form below to get in touch with us.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={validateForm} >

          
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-white">
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full  bg-opacity-50 rounded border   focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Contact No
                  </label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                   Date of Birth
                  </label>
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    id="date"
                    name="date"
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                   Aadhar No  
                  </label>
                  <input
                    onChange={(e) => setAadhar(e.target.value)}
                    type="text"
                    id="aadhar"
                    name="aadhar"
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                type="submit"
                className="flex mx-auto text-white bg-red-600 border-0 py-2 px-12 focus:outline-none hover:bg-red-700 rounded text-lg">
                  Send 
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-red-600">Phone: 9373734169</a>
                <p className="leading-normal my-5">
                Dragon warrior Sports
                  <br />
                  
                   Near Banjara Hotel, Doghar Pada, Vartak Ward, Virar West<br /> Maharashtra 401303
                </p>
               
              </div>
            </div>
          </form>
          </div>
        </div>
      </section>
    </div>
  );
}
