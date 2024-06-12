"use client";
import Modal from "@/components/modalOneci/Modal";
import FaceDetectionWebcam from "@/components/webCam/FaceDetectionWebcam";
import { useSearchParams } from "next/navigation";
import React, { ReactElement, useState } from "react";
import Image from "next/image";

function Page({ params }: { params: { nni: string } }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactElement>();
  const [img, setImg] = useState(null);
  const searchParams = useSearchParams();

  const type = searchParams.get("type") ?? "";

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

  const content = (
    <>
      <FaceDetectionWebcam nni={params.nni} type={type} />
    </>
  );
  /*   openModal(content, "Verification idendité ...", true, "", true, ""); */

  const useCloseModal = () => {
    setShowModal(false);
    setModalContent(<div></div>);
  };
  return (
    <>
      <div className="flex flex-col items-center mt-[-100px]">
        <div className="grid grid-cols-1 items-center">
          <h1 className="text-2xl  font-bold tracking-tight text-gray-900 sm:text-2xl  md:text-2xl p-6">
            <span className="block">
              {/*  Use the */}
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600">
              power of social proof
            </span> */}
              Veillez verification si ces informations sont correctes et quil ny
              a pas derreurs
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-2 ">
          <div className="col-span-2 flex items-center ">
            <Image
              width={311}
              height={305}
              style={{
                cursor: "pointer",
                width: "311px",
                height: "305px",
                borderRadius: "2%",
                // objectFit: "cover",
                border: "1px solid  gray",
              }}
              src="/D-ID-portrait_character.webp"
              alt="oneci"
            />
          </div>
          <div className="col-span-3 border-4 border-[#141616]">
            <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">NOM:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ONECI
              </dd>
            </div>
            <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">PRENOMS :</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ONECI
              </dd>
            </div>
            <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">NNI :</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                12345678912
              </dd>
            </div>
            <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">SEXE :</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                M
              </dd>
            </div>
            <div className="py-3 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">TELEPHONE :</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                (+225) 123 456 789
              </dd>
            </div>
            <div className="flex flex-col px-4 pb-3">
              <button
                onClick={() =>
                  openModal(
                    content,
                    "Verification veillez patienter ...",
                    true,
                    "3xl",
                    true,
                    ""
                  )
                }
                className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                type="submit"
              >
                Passer donc à la reconnaissance faciale
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={useCloseModal}
        content={<>{modalContent}</>}
        size={size}
        title={title}
        actionLabel={label}
        onCloseExiste={closeExiste}
        gradient={gradient}
      />
    </>
  );
}

export default Page;
