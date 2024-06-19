"use client";

import React, { ReactElement, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import useMessageModal from "@/hooks/useMessageModal";
import CountrySelect from "@/components/form/CountrySelect";

import RadioGroup from "@/components/form/RadioGroup";

import FormInput from "@/components/form/FormInput";
import Modal from "@/components/modalOneci/Modal";
import useModal from "@/hooks/useModal";

const Page: React.FC<{ params: { achattimbre: string } }> = ({ params }) => {
  const messageModal = useMessageModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [selectedOption, setSelectedOption] = useState("ci");
  const [selectedTypeOption, setSelectedTypeOption] = useState("duplicata");
  const [isCountrySelectVisible, setIsCountrySelectVisible] = useState(true);

  const modal = useModal();

  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [img, setImg] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactElement | null>(
    null
  );

  // Fonction pour ouvrir le modal
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

  const useCloseModal = () => {
    setShowModal(false);
    setModalContent(<div></div>);
  };

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenoms: "",
      dateNaissance: "",
      lieuNaissance: "",
      nommere: "",
      prenomsmerere: "",
      telephone: "",
      adressemail: "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Nom est requis pour continuer le processus"),
      prenoms: Yup.string().required(
        "Prenoms est requis pour continuer le processus"
      ),
      dateNaissance: Yup.date().required(
        "Date de naissance est requise pour continuer le processus"
      ),
      lieuNaissance: Yup.string().required(
        "Lieu de naissance est requis pour continuer le processus"
      ),
      nommere: Yup.string().required(
        "Nom de mere est requis pour continuer le processus"
      ),
      prenomsmerere: Yup.string().required(
        "Prenoms de mere est requis pour continuer le processus"
      ),
      telephone: Yup.string().required(
        "Telephone est requis pour continuer le processus"
      ),
      adressemail: Yup.string().required(
        "Adresse mail est requise pour continuer le processus"
      ),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
    },
  });

  const radioOptions = [
    { value: "ci", label: "Côte d’Ivoire" },
    {
      value: "international",
      label: "L’international (consulat ou ambassade)",
    },
  ];

  const handleRadioChange = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    setIsCountrySelectVisible(selectedOption === "international");
  };

  const countryOptions = [
    { value: "", label: "Choose a country" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
  ];

  const typeDemandeOptions = [
    { value: "duplicata", label: "Duplicata CNI" },
    { value: "nouvelle", label: "Nouvelle CNI" },
    { value: "renouvellement", label: "Renouvellement CNI" },
  ];

  // Fonction pour gérer le changement d'option
  const handleTypeChange = (selectedOption: string) => {
    setSelectedTypeOption(selectedOption);

    let content: React.ReactElement;
    switch (selectedOption) {
      case "duplicata":
        content = (
          <div className="bg-white p-6 rounded-lg ">
            <h1 className="text-2xl font-bold mb-4">
              Demande de Duplicata CNI
            </h1>
            <h2 className="text-xl font-bold mb-4">Cible:</h2>
            <p className="text-lg text-gray-700 mb-6">
              Ivoiriens dont la CNI se trouve dans un contexte de :
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
              <li>Perte</li>
              <li>Vol</li>
              <li>Dégradation</li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
              Dans le processus de demande, vous aurez à fournir votre NNI lié à
              la CNI concernée
            </p>
            <h2 className="text-xl font-bold mb-4">
              Disposez-vous de votre numéro NNI ?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-lg text-gray-700">Oui</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-lg text-gray-700">Non</span>
              </div>
            </div>
          </div>
        );
        openModal(content, "Demande de Duplicata CNI", true, "3xl", false, "");

        break;
      case "nouvelle":
        content = (
          <div className="bg-white p-6 rounded-lg ">
            <h1 className="text-2xl font-bold mb-4">Cible:</h1>
            <p className="text-lg text-gray-700 mb-6">
              Ivoiriens de 5 ans et plus n’ayant jamais fait la demande de la
              carte nationale d’identité (CNI)
            </p>
            <h2 className="text-xl font-bold mb-4">Pièces à fournir:</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
              <li>Le Certificat de nationalité de 2 ans au plus</li>
              <li>L’extrait d’acte de naissance de de 6 mois au plus</li>
            </ul>
            <h2 className="text-xl font-bold mb-4">NB:</h2>
            <p className="text-lg text-gray-700">
              Femmes mariées: joindre la copie de l’acte de mariage si l’extrait
              ne porte pas la mention.
            </p>
          </div>
        );
        openModal(content, "Nouvelle Demande de CNI", true, "3xl", false, "");
        break;
      case "renouvellement":
        content = (
          <div className="bg-white p-6 rounded-lg ">
            <h1 className="text-2xl font-bold mb-4">Cible:</h1>
            <p className="text-lg text-gray-700 mb-6">
              Ivoiriens dont la CNI est arrivée à expiration en 2009 ou ayant
              perdu l’ancienne carte en cours de validité ou encore voulant
              s’inscrire dans le nouveau système
            </p>
            <h2 className="text-xl font-bold mb-4">Pièces à fournir:</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>
                La carte nationale d’identité ou une photocopie de cette CNI ou
                le numéro de cette CNI
              </li>
            </ul>
          </div>
        );
        openModal(
          content,
          "Demande de Renouvellement CNI",
          true,
          "3xl",
          false,
          "Fermer"
        );

        break;
      default:
        content = <div></div>; // Par défaut, pas de contenu
    }

    // Ouvrir le modal avec le contenu spécifique
    // if (content) {
    //     openModal(content, "Titre du modal", true, "lg", false, "Fermer");
    // }
  };

  return (
    <div className="grid grid-cols-6 gap-2 mt-[-2.5rem]">
      <div></div>
      <div className="col-span-6 gap-4">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col"
          action={"/formulaireNni"}
        >
          <div className="relative px-4 py-5 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <label className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5">
              Votre demande de titre sera effectuée à partir de :
            </label>
            <RadioGroup
              options={radioOptions}
              selectedOption={selectedOption}
              onChange={handleRadioChange}
            />
            {isCountrySelectVisible && (
              <CountrySelect options={countryOptions} />
            )}
            <label className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5">
              Type de demande
            </label>
            <RadioGroup
              options={typeDemandeOptions}
              selectedOption={selectedTypeOption}
              onChange={handleTypeChange}
            />

            <div className="mt-2 grid grid-cols-1 sm:grid-cols-4 gap-5">
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
                    : "Votre nom "}
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
                    : "Votre prenom(s)"}
                </label>
                <p></p>

                <FormInput
                  formik={formik}
                  type="text"
                  name="prenoms"
                  placeholder="Entrez votre prenom(s)* "
                  existe={false}
                  longeur={255}
                  message={formik.errors.prenoms}
                />
              </div>

              <div>
                <label
                  htmlFor="dateNaissance"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.dateNaissance && formik.errors.dateNaissance
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.dateNaissance && formik.errors.dateNaissance
                    ? formik.errors.dateNaissance
                    : "Date de naissance"}
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
                  htmlFor="lieu_naissance"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.lieuNaissance && formik.errors.lieuNaissance
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.lieuNaissance && formik.errors.lieuNaissance
                    ? formik.errors.lieuNaissance
                    : "Lieu de naissance"}
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
              <div>
                <label
                  htmlFor="nommere"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.nommere && formik.errors.nommere
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.nommere && formik.errors.nommere
                    ? formik.errors.nommere
                    : "Nom de la mère"}
                </label>
                <p></p>

                <FormInput
                  formik={formik}
                  type="text"
                  name="nommere"
                  placeholder="Entrez votre nom de la mère* "
                  existe={false}
                  longeur={255}
                  message={formik.errors.nommere}
                />
              </div>
              <div>
                <label
                  htmlFor="prenomsmerere"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.prenomsmerere && formik.errors.prenomsmerere
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.prenomsmerere && formik.errors.prenomsmerere
                    ? formik.errors.prenomsmerere
                    : "prenom(s) de la mère"}
                </label>
                <p></p>

                <FormInput
                  formik={formik}
                  type="text"
                  name="prenomsmerere"
                  placeholder="Entrez prenom(s) de la mere* "
                  existe={false}
                  longeur={255}
                  message={formik.errors.prenomsmerere}
                />
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.telephone && formik.errors.telephone
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.telephone && formik.errors.telephone
                    ? formik.errors.telephone
                    : "Telephone"}
                </label>
                <p></p>

                <FormInput
                  formik={formik}
                  type="text"
                  name="telephone"
                  placeholder="Entrez votre telephone* "
                  existe={false}
                  longeur={255}
                  message={formik.errors.telephone}
                />
              </div>

              <div>
                <label
                  htmlFor="adressemail"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.adressemail && formik.errors.adressemail
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.adressemail && formik.errors.adressemail
                    ? formik.errors.adressemail
                    : "Adresse Email"}
                </label>
                <p></p>

                <FormInput
                  formik={formik}
                  type="text"
                  name="adressemail"
                  placeholder="Entrez votre adresse email* "
                  existe={false}
                  longeur={255}
                  message={formik.errors.adressemail}
                />
              </div>
            </div>
            <div className="flex justify-center items-center mb-3 mt-2">
              <button
                className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                type="submit"
              >
                Soumettre la demande
              </button>
            </div>
          </div>
        </form>
      </div>
      <div></div>
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
    </div>
  );
};

export default Page;
