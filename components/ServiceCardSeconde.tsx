"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  nni: string;
  type: string;
}

const ServiceCardSeconde: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  nni,
  type,
}) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          type == "service"
            ? router.push("/serviceIdentite")
            : router.push("/formulaire/?type=" + type);
        }}
        className="div h-[8em] w-full bg-white m-auto rounded-[1em] relative group p-2 z-0 overflow-hidden border-2 border-[#ED7F10] cursor-pointer shadow-lg"
      >
        <div className="h-[7em] w-[7em] bg-[#75d4c3] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[950%] z-[-1] duration-[400ms]"></div>
        <div className="h-[6em] w-[6em] bg-[#75d4c3] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[450%] z-[-1] duration-[400ms]"></div>
        <div className="h-[5em] w-[5em] bg-[#f1a730] rounded-full absolute bottom-full -left-[3.5em] group-hover:scale-[550%] z-[-1] duration-[400ms]"></div>

        {/*  <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-white duration-100">
        <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-white duration-100 before:bottom-0 before:left-0"></span>
        <p className="text-gray-500 dark:text-gray-400 group-hover:text-white duration-100 lg:text-lg font-bold font-Poppin">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.Accelerate critical development work
        </p>
        <i className="fa-solid fa-arrow-right"></i>
      </button> */}

        <div className="grid grid-cols-3 ">
          <div className="col-span-2 pl-[7px] ">
            <h1 className="z-20 font-bold font-Poppin text-[1.4em] group-hover:text-white duration-100 mt-[21px]">
              {title}
            </h1>
          </div>
          <div className="col-span-1">
            <Image
              width={200}
              height={200}
              className="w-full h-[114px] text-gray-800 dark:text-white group-hover:text-white duration-100"
              src={`/${image}`}
              alt="oneci"
            />
            {/* <svg
            className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-white duration-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
          </svg> */}
          </div>
        </div>
        {/*   <div className="relative flex py-3.5 items-center">
        <div className="flex-grow border-t border-gray-400 group-hover:border-white group-hover:text-white duration-100"></div>
        
        <div className="flex-grow border-t border-gray-400 group-hover:border-white group-hover:text-white duration-100"></div>
      </div> */}
      </div>
    </>
  );
};

export default ServiceCardSeconde;
