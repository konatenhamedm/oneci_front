"use client"; // Ajoutez cette ligne en haut de votre fichier

import useMessageModal from "@/hooks/useMessageModal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CheckboxImage from "@/components/form/CheckboxImageProps";
import FormInput from "@/components/form/FormInput";
import LinkComponent from "@/components/form/LinkComponentProps ";
import Input from "@/components/form/Input";

const Page: React.FC<{ params: { old: string } }> = ({ params }) => {
  const [selectedOption, setSelectedOption] = useState("cni_old");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const messageModal = useMessageModal();
  const modal = useMessageModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      numero: "",
      nom: "",
      dateNaissance: "",
    },
    validationSchema: Yup.object({
      numero: Yup.string().required(
        "Numero est requis pour continuer le processus"
      ),
      nom: Yup.string().required("Nom est requis pour continuer le processus"),
      dateNaissance: Yup.date().required(
        "Date de naissance est requise pour continuer le processus"
      ),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      // Votre logique de soumission ici
    },
  });

  const radioOptions = [
    {
      id: "cni_old",
      value: "cni_old",
      label: "CNI (Ancien Format)",
      src: "/cni_old_example.png",
    },
    {
      id: "cni_new",
      value: "cni_new",
      label: "CNI (Nouveau Format)",
      src: "/cni_new_example.png",
    },
  ];

  const handleRadioChange = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    setIsFormVisible(selectedOption === "cni_new");
  };

  return (
    <>
      <div className="col-span-4">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col"
          action={"/formulaire"}
        >
          <div className="grid grid-cols">
            <div className="relative px-4 py-5 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="mt-[-2rem] mb-[2rem]">
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"
                  htmlFor="fullname"
                >
                  Veuillez renseigner les champs du formulaire ci-dessous afin
                  de connaître le statut de la production de votre Carte
                  Nationale d'Identité
                </label>
                <div className="flex-inline mt-2 grid grid-cols-1 md:grid-cols-7 gap-5">
                  {/*  <FormInput
                      label="Entrez votre numéro de demande* :"
                      type="text"
                      id="demande"
                    /> */}

                  <div className="col-span-2">
                    <label
                      htmlFor="numero"
                      className={`block font-latoBold text-sm pb-2 ${formik.touched.numero && formik.errors.numero
                        ? "text-red-400"
                        : ""
                        }`}
                    >
                      {formik.touched.numero && formik.errors.numero
                        ? formik.errors.numero
                        : "Votre numero de demande"}
                    </label>

                    <p></p>

                    <FormInput
                      formik={formik}
                      type="text"
                      name="numero"
                      placeholder="Entrez votre numéro de demande* "
                      existe={false}
                      longeur={255}
                      message={formik.errors.numero}
                    />
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="nom"
                      className={`block font-latoBold text-sm pb-2 ${formik.touched.nom && formik.errors.nom
                        ? "text-red-400"
                        : ""
                        }`}
                    >
                      {formik.touched.nom && formik.errors.nom
                        ? formik.errors.nom
                        : "Votre nom de famille"}
                    </label>

                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="nom"
                      placeholder="Entrez votre nom* "
                      existe={false}
                      longeur={255}
                      message={formik.errors.nom}
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="numero"
                      className={`block font-latoBold text-sm pb-2 ${formik.touched.dateNaissance &&
                        formik.errors.dateNaissance
                        ? "text-red-400"
                        : ""
                        }`}
                    >
                      {formik.touched.dateNaissance &&
                        formik.errors.dateNaissance
                        ? formik.errors.dateNaissance
                        : "Votre date de naissance"}
                    </label>

                    <p></p>
                    <FormInput
                      formik={formik}
                      type="date"
                      name="dateNaissance"
                      placeholder="Entrez votre date de naissance* "
                      existe={false}
                      longeur={11}
                      message={formik.errors.dateNaissance}
                    />
                  </div>
                </div>

              </div>
              <div>
                <LinkComponent
                  href="/serviceIdentite/suivietat/"
                  text=" Je ne suis pas en possession de mon numéro de demande"
                />
              </div>
      

              {/* Votre autre code de formulaire continue ici... */}
              <div className="flex justify-center items-center mb-5 mt-[16px]">
                <button
                  className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                  type="submit"
                >
                  Soumettre la demande
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
