/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import Image from "next/image";
import { Timeline } from "../components/ui/timeline";

const Education = () => {
  const data = [
    {
      title: "2022 - Present",
      content: (
        <div className=" pt-0 p-3 lg:pl-10">
          <div className="flex xl:flex-row flex-col justify-center items-center">
            <div>
              <Image
                src="/eduimage/uom.png"
                alt="hero template"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center xl:items-start items-center pt-5 xl:pt-0 ">
              <h3
                className="text-lg md:text-lg xl:text-2xl font-bold text-black dark:text-white max-w-4xl"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                University of Moratuwa
              </h3>

              <p
                className="text-white text-lg text-center lg:text-justify pt-3 "
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Bachelor of Science in{" "}
                <span className="text-[#6c63ff]">
                  Information Technology & Management
                </span>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2017 - 2020",
      content: (
        <div className=" pt-0 p-3 lg:pl-14 mb-4">
          <div className="flex xl:flex-row gap-4 flex-col justify-center items-center">
            <div>
              <Image
                src="/eduimage/psc.jpg"
                alt="hero template"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center xl:items-start items-center pt-5 xl:pt-0 ">
              <h3
                className="text-lg md:text-lg text-center xl:text-2xl font-bold text-black dark:text-white max-w-4xl"
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                President's Science College
              </h3>

              <p
                className="text-white text-lg text-center lg:text-justify pt-3 "
                style={{ fontFamily: "Preahvihear Regular" }}
              >
                Continued Advanced Level studies in the{" "}
                <span className="text-[#6c63ff]">Physical Science</span>
                stream at President's Science College.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full pb-96 p-10">
      <div className="flex flex-col items-center justify-center pt-10">
        <h1
          className="md:text-7xl text-5xl text-center text-white"
          style={{ fontFamily: "Preahvihear Regular" }}
        >
          My
          <span className="text-[#6c63ff]"> Educations</span>
        </h1>
      </div>

      <Timeline data={data} />
    </div>
  );
};

export default Education;
