"use client";
import React, { ReactElement, useState } from "react";
import useModal from "@/hooks/useModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { axiosAuthapi } from "@/lib/axios";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Modal from "./modalOneci/Modal";
import Input from "./form/Input";

interface validationCardProps {
  operateur?: any;
  nombre: any;
  document: any;
  nni: any;
}

const ValidationCard: React.FC<validationCardProps> = ({
  operateur,
  document,
  nombre,
  nni,
}) => {
  const modal = useModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactElement>();
  const [img, setImg] = useState(null);

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
      <h1>vhjdgjhdgdghd</h1>
    </>
  );

  const formik = useFormik({
    initialValues: {
      numero: "",
      code: "",
    },

    validationSchema: Yup.object({
      numero: Yup.string().required(
        "Le numero de telephone est requis pour finaliser le processus"
      ),
      code: Yup.string().required(
        "Le code de validation est requis pour finaliser le processus"
      ),
    }),

    onSubmit: async (values) => {
      /*  const modalElementNotFound: HTMLDialogElement | null =
      document.getElementById("my_modal_not_found") as HTMLDialogElement | null;
    const modalElementServeur: HTMLDialogElement | null =
      document.getElementById("my_modal_serveur") as HTMLDialogElement | null;
    setIsLoading(true); */

      openModal(
        <>
          <div className="flex flex-row gap-2 justify-center mt-5 mb-5">
            <div className="w-4 h-4 rounded-full bg-[#A2E9C1] animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-[#A2E9C1] animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-[#A2E9C1] animate-bounce [animation-delay:.7s]"></div>
          </div>
        </>,
        "Patientez....",
        true,
        "3xl",
        true,
        ""
      );

      const data = {
        nni: nni,
        nombre: nombre,
        code: values.code,
        numero: values.numero,
      };
      /*  await axiosAuthapi
        .post("/demande/create", data)
        .then((res) => {
          setIsLoading(false);

          if (isLoading == false) {
            modal.onClose();
          }
        })
        .catch((err) => {
        }); */
    },
  });

  const sendData = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/greet/" + nombre,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  const useCloseModal = () => {
    setShowModal(false);
    setModalContent(<div></div>);
  };
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <>
      <div
        role="alert"
        className="mx-auto w-full rounded-lg border-2 h-[334px] border-[#f1a730] bg-white p-4 shadow-lg sm:p-6 lg:p-8 before:hover:rounded-b-2xl col-span-5"
      >
        <div className="flex items-center gap-4 justify-center">
          {/* <div className="flex flex-col items-center justify-center h-screen dark"> */}
          <div className="w-full max-w-md bg-gray rounded-lg  p-6">
            <h2 className="text-2xl font-bold text-black mb-4">
              Faites le{" "}
              {operateur == "orange"
                ? " *144*828#"
                : operateur == "mtn"
                ? " *144*85#"
                : operateur == "moov"
                ? " *144*885#"
                : " *144*42#"}
            </h2>
            <form
              className="flex flex-col"
              action={` ${
                "/imprime/" +
                nni +
                "&operateur=" +
                operateur +
                "&doc=" +
                document +
                "&nombre=" +
                nombre
              }`}
              onSubmit={formik.handleSubmit}
            >
              <Input
                formik={formik}
                type="text"
                name="numero"
                placeholder="Entrez votre numéro de télephone"
                existe={true}
                longeur={10}
                message={formik.errors.numero}
              />
              <Input
                formik={formik}
                type="text"
                name="code"
                placeholder="Entrez le code réçu"
                existe={true}
                longeur={5}
                message={formik.errors.code}
              />

              <button
                //onClick={modal.onOpen}
                className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                type="submit"
              >
                Soumettre
              </button>
            </form>

            {/* <button
              onClick={sendData}
              className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
            >
              hhh
            </button> */}
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="mx-auto w-full  h-[334px]  bg-white p-4 ">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center light">
            <div className="w-full max-w-md  bg-white rounded-lg  p-6 items-center justify-center">
              <form className="flex flex-col">
                <h2 className="text-md font-bold text-black mt-[96px] ">OU</h2>
              </form>

              <div className="flex justify-center mt-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        role="alert"
        className="mx-auto  w-full col-span-2 rounded-lg border-2 h-[334px] border-[#f1a730] bg-white p-4 shadow-lg sm:p-6 lg:p-8 before:hover:rounded-b-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center light">
            <div className="w-full max-w-md  bg-white rounded-lg shadow-sm p-6">
              <form className="flex flex-col">
                <h2 className="text-md font-bold text-black ">Par QR Code</h2>

                <Image
                  /*  width={113}
                  height={113} */
                  src="/qr.png"
                  alt="Qr code ${type}"
                  height={113}
                  width={113}
                  className=" mt-[23px] border-double border-2  border-[#f1a730] "
                />
              </form>

              <div className="flex justify-center mt-4"></div>
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
};

export default ValidationCard;
