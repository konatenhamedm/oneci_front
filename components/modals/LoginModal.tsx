"use client";

import { useCallback, useState } from "react";
import useLoginModal from "../../hooks/useModal";
import Modal from "./modal";
import * as Yup from "yup";
import { useFormik } from "formik";

const LoginModal = () => {
  //const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: async (values) => {
      setIsLoading(true);
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const bodyContent = (
    <div className="flex flex-col gap-2">
      {message != "" && (
        <div
          className="flex items-center p-4 mb-4  text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          {/*  <span className="sr-only">Info</span> */}
          <div>
            <span className="font-medium">Alerte une erreur!</span> {message}.
          </div>
        </div>
      )}

      {/* Country input field */}

      {isLoading == true && (
        <div className="flex flex-row gap-2 justify-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#A2E9C1] animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 rounded-full bg-[#A2E9C1] animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-[#A2E9C1] animate-bounce [animation-delay:.7s]"></div>
        </div>
      )}
    </div>
  );

  const footerContent = <div className="flex flex-col gap-4 mt-3"></div>;

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Office national de l'etat civil et  d'identification"
      size={true}
      actionLabel=""
      onClose={loginModal.onClose}
      onSubmit={handleSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
