"use client";
import { useRouter } from "next/navigation";
import React, { ReactElement, useState } from "react";
import Image from "next/image";
import Modal from "./modalOneci/Modal";
import QRCodeScanner from "../components/webCam/QRCodeScanner";
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  nni: string;
  type: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  nni,
  type,
}) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [titre, setTitre] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactElement>();
  const [errorServeur, setErrorServeur] = useState(false);

  const openModal = (
    content: ReactElement,
    titre: string,
    existe: boolean,
    size: string,
    gradient: boolean,
    label: string,
    errorServeur: boolean
  ) => {
    setModalContent(content);
    setTitre(titre);
    setCloseExiste(existe);
    setSize(size);
    setGradient(gradient);
    setLabel(label);

    setShowModal(true);
    setErrorServeur(errorServeur);
  };

  const useCloseModal = () => {
    setShowModal(false);
    setModalContent(<div></div>);
  };

  const content = (
    <>
      <div
        role="alert"
        className="relative flex w-full px-4 py-4 text-base text-gray-900 rounded-lg font-regular bg-gray-900/10 items-center"
        style={{ opacity: 1 }}
      >
        <div className="shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="ml-3 mr-12">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
            S'il vous plaît veuillez choisir pour qui voulez faire l'opération
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <button
          onClick={() => router.push("/formulaire/?type=" + type)}
          className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
          type="submit"
        >
          <Image
            className="items-center justify-center md:ml-[40px] ml-[90px] "
            width={100}
            height={100}
            alt="logo"
            src="/437532.png"
          />{" "}
          Imprimer pour vous
        </button>

        <button
          onClick={() =>
            openModal(
              content_cam,
              "Faite votre choix...",
              true,
              "3xl",
              false,
              "",
              false
            )
          }
          className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
          type="submit"
        >
          <Image
            className="items-center justify-center md:ml-[40px] ml-[90px] "
            width={100}
            height={100}
            alt="logo"
            src="/76828.png"
          />{" "}
          Imprimer pour quelqu'un
        </button>

        {/* <div className="flex flex-col items-end"> */}
        <button
          onClick={() => router.push("/formulairefils/?type=" + type)}
          className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
          type="submit"
        >
          <Image
            className="items-center justify-center md:ml-[40px] ml-[90px] "
            width={100}
            height={100}
            alt="logo"
            src="/10415.png"
          />{" "}
          Imprimer pour votre fils
        </button>
      </div>
      {/* </div> */}
    </>
  );

  const [result, setResult] = useState("");

  const handleScan = async (data: any) => {
    const response = await fetch("http://127.0.0.1:5000/compare", {
      method: "POST",
      body: JSON.stringify({
        image1: data,
        // Vous pouvez ajouter une autre image ou gérer la logique pour comparer deux images ici
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = "22222222222";
    setResult(responseData);
  };

  const content_cam = (
    <div>
      <h1>QR Code Scanner and Comparison</h1>
      <QRCodeScanner onScan={handleScan} />
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );

  return (
    <>
      <div
        onClick={() => {
          if (type == "extrait") {
            openModal(
              content,
              "Faite votre choix...",
              true,
              "3xl",
              false,
              "",
              false
            );
          } else {
            router.push("/formulaire/?type=" + type);
          }
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
            <h1 className="z-20 font-bold font-Poppin text-[1.2em] group-hover:text-white duration-100 mt-[21px]">
              {title}
            </h1>
          </div>
          <div className="col-span-1">
            <Image
              width={200}
              height={200}
              className="w-full h-full text-gray-800 dark:text-white group-hover:text-white duration-100"
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

      <Modal
        show={showModal}
        onClose={useCloseModal}
        content={<>{modalContent}</>}
        size={size}
        title={titre}
        actionLabel={label}
        onCloseExiste={closeExiste}
        gradient={gradient}
        errorServeur={errorServeur}
      />
    </>
  );
};

export default ServiceCard;
