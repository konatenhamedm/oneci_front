"use client";
import Input from "@/components/form/Input";
import Modal from "@/components/modalOneci/Modal";
import Image from "next/image";
import React, { ReactElement, Suspense, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useMessageModal from "@/hooks/useMessageModal";
import { useRouter, useSearchParams } from "next/navigation";

function Page() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactElement>();
  const [img, setImg] = useState(null);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

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
      const content = <></>;

      // setIsLoading(true);

      router.push("/verification/" + values.nni + "?type=" + type);
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
                existe={false}
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
        />
      </>
    </Suspense>
  );
}

export default Page;
