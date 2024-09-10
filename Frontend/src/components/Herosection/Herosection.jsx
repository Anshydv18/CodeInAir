import React from "react";
import hero from '../../assets/herosection/herosection.jpg'
import { Link } from "react-router-dom";
function Herosection() {
  return (
    <div className=" px-16">
      <section className="relative  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-500">
                {" "}
                Future Career.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-rose-500 sm:text-xl/relaxed font-bold">
            "Reading is essential for those who seek to rise above the ordinary.” 


            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to={"/interview"}
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                to={"/interview"}
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
