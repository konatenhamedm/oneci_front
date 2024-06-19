"use client";
import Modal from "@/components/modalOneci/Modal";
import FaceDetectionWebcam from "@/components/webCam/FaceDetectionWebcam";
import { useSearchParams } from "next/navigation";
import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import { axiosAuthapi } from "@/lib/axios";
import { Personne } from "@/modele/Personne";

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
  //const [personne, setPersonne] = useState<Personne>({});
  const [personne, setPersonne] = useState<Personne>({
    id: 0,
    nni: "",
    nom: "",
    prenoms: "",
    image: "",
  });
  const [errorServeur, setErrorServeur] = useState(false);

  const type = searchParams.get("type") ?? "";

  const openModal = (
    content: ReactElement,
    title: string,
    existe: boolean,
    size: string,
    gradient: boolean,
    label: string,
    errorServeur: boolean
  ) => {
    setModalContent(content);
    setTitle(title);
    setCloseExiste(existe);
    setSize(size);
    setGradient(gradient);
    setLabel(label);

    setShowModal(true);
    setErrorServeur(errorServeur);
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

  useEffect(() => {
    axiosAuthapi
      .get("/verification/data/" + params.nni)
      .then((res) => {
        setPersonne(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        //openModal(content, "Attention", true, "lg", false, "", true);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center md:mt-[-100px]">
        <div className="grid grid-cols-1 items-center">
          <h1 className="text-xl items-center  font-bold tracking-tight text-gray-900 sm:text-2xl  md:text-2xl p-6">
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

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 ">
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
              src={personne.image}
              //src="/D-ID-portrait_character.webp"
              alt="oneci"
            />
          </div>
          <div className="col-span-3 border-4 border-[#141616]">
            <div className="py-3 px-4 grid grid-cols-2 sm:py-3  sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">NOM:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {personne.nom}
              </dd>
            </div>
            <div className="py-3 px-4 grid grid-cols-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">PRENOMS :</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {personne.prenoms}
              </dd>
            </div>
            <div className="py-3 px-4 grid grid-cols-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">NNI :</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {personne.nni}
              </dd>
            </div>
            <div className="py-3 px-4 grid grid-cols-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-extrabold text-black">SEXE :</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                M
              </dd>
            </div>
            <div className="py-3 px-4 grid grid-cols-2 sm:py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
                    "",
                    false
                  )
                }
                className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white text-sm font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
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
        errorServeur={errorServeur}
      />
    </>
  );
}

export default Page;
