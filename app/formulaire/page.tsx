"use client";
import Input from "@/components/form/Input";
import Modal from "@/components/modalOneci/Modal";
import Image from "next/image";
import React, { ReactElement, Suspense, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useMessageModal from "@/hooks/useMessageModal";
import { useRouter, useSearchParams } from "next/navigation";
import { axiosAuthapi } from "@/lib/axios";
import { Spinner } from "flowbite-react";

function Page() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactElement>();
  const [img, setImg] = useState(null);
  const [errorServeur, setErrorServeur] = useState(false);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

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

  const closeModal = () => {
    setShowModal(false);
    setModalContent(<div></div>);
  };

  const messageModal = useMessageModal();

  const modal = useMessageModal();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      nni: "",
    },

    validationSchema: Yup.object({
      nni: Yup.string()
        .required("NNI est requis pour continuer le processus")
        .length(11, "Le numéro NNI doit contenir exactement 11 caractères."),
    }),

    onSubmit: async (values) => {
      const content = (
        <>
          <div
            role="alert"
            className="relative flex w-full px-4 py-4 text-base text-gray-900 rounded-lg font-regular bg-gray-900/10"
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
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-3 mr-12">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
                Attention ce numéro NNI est inexistant:
              </p>
              <ul className="mt-2 ml-2 list-disc list-inside">
                <li>Veillez nous fournir un NNI valide</li>
                <li>Il s'agit d'un numéro de 11 chiffres</li>
                <li>Merci !!!</li>
              </ul>
            </div>
          </div>
        </>
      );

      setIsLoading(true);

      await axiosAuthapi
        .get("/verification/" + values.nni)
        .then((res) => {
          setIsLoading(false);

          if (res.data.data == "true") {
            router.push("/verification/" + values.nni + "?type=" + type);
          } else {
            openModal(content, "Attention", true, "lg", false, "", false);
          }
        })
        .catch((err) => {
          openModal(content, "Attention", true, "lg", false, "", true);
        });
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <Suspense>
      <>
        <div className="flex flex-col items-center justify-center h-screen dark">
          <div className="w-full max-w-lg bg-gray-700 rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-3">
              <div></div>
              <div>
                <Image
                  width={130}
                  height={130}
                  style={{
                    cursor: "pointer",
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid  #f1a730",
                  }}
                  src="/imagedemo.jpg"
                  alt="oneci"
                />
              </div>
              <div></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Saisissez votre numéro national didentification (NNI)
            </h2>

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col"
              action={"/formulaire"}
            >
              <Input
                formik={formik}
                type="text"
                name="nni"
                placeholder="Entrez votre numéro national d'identification"
                existe={true}
                longeur={11}
                message={formik.errors.nni}
              />

              <button
                // onClick={modal.onOpen}
                className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                type="submit"
              >
                Soumettre la demande
              </button>

              {isLoading && <Spinner />}
            </form>

            <div className="flex justify-center mt-4"></div>
          </div>
        </div>

        <Modal
          show={showModal}
          onClose={closeModal}
          content={<>{modalContent}</>}
          size={size}
          title={title}
          actionLabel={label}
          onCloseExiste={closeExiste}
          gradient={gradient}
          errorServeur={errorServeur}
        />
      </>
    </Suspense>
  );
}

export default Page;
