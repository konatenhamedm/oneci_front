"use client";
import React, { ReactElement, use, useState } from "react";
import Modal from "../modalOneci/Modal";

function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactElement>();

  const openModal = (
    content: ReactElement,
    title: string,
    existe: boolean,
    size: string,
    gradient: boolean,
    label: string
  ) => {
    setModalContent(content);
    setTitle(title);
    setCloseExiste(existe);
    setSize(size);
    setGradient(gradient);
    setLabel(label);

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(<div></div>);
  };
  return (
    <>
      <div className="flex w-full h-[50px]">
        <div className="bg-[#FF0000] text-white relative h-[50px]">
          <h3 className="py-2 px-3 font-bold">INFOS</h3>
        </div>
        {/* #e9b5a4 */}
        <div className="overflow-x-hidden bg-[#f1a730] h-[50px] ">
          <div className="py-1 animate-marquee whitespace-nowrap relative">
            <span className="text-3xl mx-4 text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            {/* <span className="text-4xl mx-4">Marquee Item 2</span>
            <span className="text-4xl mx-4">Marquee Item 3</span>
            <span className="text-4xl mx-4">Marquee Item 4</span>
            <span className="text-4xl mx-4">Marquee Item 5</span> */}
          </div>
        </div>
      </div>

      <div className="flex w-full h-[300px] justify-center px-4 flex-col ">
        {/* <h3 className="mb-8 mt-[-93px] text-5xl  text-center font-medium leading-tight text-primary ">
          Les étapes à suivre
        </h3> */}
        <h1 className="mb-8 mt-[-39px] text-4xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Suivre bien les
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#75d4c3] from-[#f1a730]">
            étapes suivvantes
          </span>
        </h1>
        <ol className="lg:flex items-center w-full space-y-4 lg:space-x-8 lg:space-y-0">
          <li className=" flex-1">
            <a
              href="https://pagedone.io/"
              className="border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-[#75d4c3] font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0"
            >
              <span className="text-sm lg:text-base text-[#f1a730]">
                Etape 1
              </span>
              <p className="text-base lg:text-lg text-gray-900">
                Deliver great service experiences fast - without the complexity
                of
              </p>
            </a>
          </li>
          <li className=" flex-1">
            <a className="border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-[#75d4c3] font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0">
              <span className="text-sm lg:text-base text-[#f1a730]">
                Etape 2
              </span>
              <p className="text-base lg:text-lg text-gray-900">
                Deliver great service experiences fast - without the complexity
                of
              </p>
            </a>
          </li>
          <li className=" flex-1">
            <a className="border-l-2 flex flex-col border-t-0 pl-4 pt-0 border-solid border-[#75d4c3] font-medium lg:pt-4 lg:border-t-2 lg:border-l-0 lg:pl-0">
              <span className="text-sm lg:text-base text-[#f1a730]">
                Etape 3
              </span>
              <p className="text-base lg:text-lg text-gray-900">
                Deliver great service experiences fast - without the complexity
                of
              </p>
            </a>
          </li>
        </ol>

        <div className="flex items-center justify-center ">
          <div className="flex flex-col ml-3">
            <button
              onClick={() =>
                openModal(
                  <>
                    <div className="px-2">
                      <iframe
                        className="w-full h-full my-5 rounded-lg md:h-80"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/A-VRtdr9lKc"
                        title="Tutoriel OneCI"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </>,
                  "Tutoriel ONECI",
                  true,
                  "3xl",
                  true,
                  ""
                )
              }
              className="bg-gradient-to-r mt-[30px] from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md  hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
              type="submit"
            >
              Demo de lapplication
            </button>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={closeModal}
        content={<>{modalContent}</>}
        size={size}
        title={title}
        actionLabel={label}
        gradient={gradient}
        onCloseExiste={closeExiste}
      />
    </>
  );
}

export default Footer;
