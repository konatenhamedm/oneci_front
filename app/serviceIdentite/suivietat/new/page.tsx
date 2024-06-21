"use client"; // Ajoutez cette ligne en haut de votre fichier

import useMessageModal from "@/hooks/useMessageModal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CheckboxImage from "@/components/form/CheckboxImageProps";
import FormInput from "@/components/form/FormInput";
import LinkComponent from "@/components/form/LinkComponentProps ";

const Page: React.FC<{ params: { new: string } }> = ({ params }) => {
  const [selectedOption, setSelectedOption] = useState("cni_old");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const messageModal = useMessageModal();
  const modal = useMessageModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenoms: "",
      dateNaissance: "",
      lieuNaissance: "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Nom est requis"),
      prenoms: Yup.string().required("Prenoms est requis"),
      dateNaissance: Yup.date().required("Date de naissance est requise"),
      lieuNaissance: Yup.string().required("Lieu de naissance est requis"),
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
      <div className="grid grid-cols-6 gap-2 mt-[-2rem]">
        <div></div>
        <div className="col-span-4">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col"
            action={"/formulaireNni"}
          >
            <div className="grid grid-cols">
              <div className="relative px-4 py-5 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="">
                  <label
                    className="font-semibold text-sm text-gray-600 pb-1 block"
                    htmlFor="fullname"
                  >
                    Veuillez renseigner les champs du formulaire ci-dessous afin
                    de retrouver votre numéro de demande
                  </label>
                  <div className="flex-inline mt-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* <FormInput label="Entrez votre nom* :" type="text" id="nom_complet" />
                                        <FormInput label="Entrez vos prénoms* :" type="text" id="prenoms" />
                                        <FormInput label="Entrez votre date de naissance* :" type="date" id="dob" />
                                        <FormInput label="Entrez votre lieu de naissance* :" type="text" id="lieu_naissance" /> */}
                    <div>
                      <label
                        htmlFor="nom"
                        className={`block font-latoBold text-sm pb-2 ${
                          formik.touched.nom && formik.errors.nom
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

                    <div>
                      <label
                        htmlFor="prenoms"
                        className={`block font-latoBold text-sm pb-2 ${
                          formik.touched.prenoms && formik.errors.prenoms
                            ? "text-red-400"
                            : ""
                        }`}
                      >
                        {formik.touched.prenoms && formik.errors.prenoms
                          ? formik.errors.prenoms
                          : "Votre prénoms"}
                      </label>
                      <p></p>
                      <FormInput
                        formik={formik}
                        type="text"
                        name="prenoms"
                        placeholder="Entrez vos prénoms* "
                        existe={false}
                        longeur={255}
                        message={formik.errors.prenoms}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="dateNaissance"
                        className={`block font-latoBold text-sm pb-2 ${
                          formik.touched.dateNaissance &&
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
                        longeur={255}
                        message={formik.errors.dateNaissance}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lieuNaissance"
                        className={`block font-latoBold text-sm pb-2 ${
                          formik.touched.lieuNaissance &&
                          formik.errors.lieuNaissance
                            ? "text-red-400"
                            : ""
                        }`}
                      >
                        {formik.touched.lieuNaissance &&
                        formik.errors.lieuNaissance
                          ? formik.errors.lieuNaissance
                          : "Votre lieu de naissance"}
                      </label>
                      <p></p>
                      <FormInput
                        formik={formik}
                        type="text"
                        name="lieuNaissance"
                        placeholder="Entrez votre lieu de naissance* "
                        existe={false}
                        longeur={255}
                        message={formik.errors.lieuNaissance}
                      />
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <LinkComponent
                    href="/serviceIdentite/suivietat/"
                    text=" Je ne suis pas en possession de mon numéro de demande"
                  />
                </div>

                {/* Votre autre code de formulaire continue ici... */}
                <div className="flex justify-center items-center mb-5">
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
        <div></div>
      </div>
    </>
  );
};

export default Page;
