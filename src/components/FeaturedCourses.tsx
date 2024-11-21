"use client";
import Link from "next/link";
import React from "react";
import courseData from "../data/courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

// data type of typescript
interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

const FeaturedCourses = () => {
  return (
    <div className="p-12 bg-gray-900">
      {/* title Section  */}
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>

      {/* Card Section  */}
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {courseData.courses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900  overflow-hidden h-full  max-w-sm">
                <div className="p-2 sm:p-4 flex flex-col space-y-3 items-center text-center flex-grow">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-[12rem]"
                  />
                  <p className="text-sm font-semibold ">{course.title}</p>
                  <p className="text-xs">{course.description}</p>
                  <Link
                    href={`/course.id`}
                    className="text-sm px-3 py-2 bg-gray-800 rounded-xl border border-gray-500 hover:font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* button section  */}
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-5 py-4 bg-gray-800 rounded-xl border border-gray-500 hover:font-semibold"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
