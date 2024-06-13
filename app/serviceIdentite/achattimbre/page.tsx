"use client";

import React, { useState } from 'react';
import { useFormik } from "formik";
import { useRouter } from 'next/navigation';
import * as Yup from "yup";
import useMessageModal from '@/hooks/useMessageModal';
import CountrySelect from '@/components/form/CountrySelect';

import RadioGroup from '@/components/form/RadioGroup';

import FormInput from '@/components/form/FormInput';

const page: React.FC<{ params: { achattimbre: string } }> = ({ params }) => {
    const messageModal = useMessageModal();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
   
    const [selectedOption, setSelectedOption] = useState('ci');
    const [selectedTypeOption, setSelectedTypeOption] = useState('duplicata');
    const [isCountrySelectVisible, setIsCountrySelectVisible] = useState(true);

    const formik = useFormik({
        initialValues: {
            nni: "",
        },
        validationSchema: Yup.object({
            nni: Yup.string()
                .required("NNI est requis pour continuer le processus")
                .length(11),
        }),
        onSubmit: async (values) => {
            setIsLoading(true);
        },
    });

    const radioOptions = [
        { value: 'ci', label: 'Côte d’Ivoire' },
        { value: 'international', label: 'L’international (consulat ou ambassade)' },
    ];

    const handleRadioChange = (selectedOption: string) => {
        setSelectedOption(selectedOption);
        setIsCountrySelectVisible(selectedOption === 'international');
    };
  

    const countryOptions = [
        { value: '', label: 'Choose a country' },
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'FR', label: 'France' },
        { value: 'DE', label: 'Germany' },
    ];

    const typeDemandeOptions = [
        { value: 'duplicata', label: 'Duplicata CNI' },
        { value: 'nouvelle', label: 'Nouvelle CNI' },
        { value: 'renouvellement', label: 'Renouvellement CNI' },
    ];
    const handleTypeChange = (selectedOption: string) => {
        setSelectedTypeOption(selectedOption);
    };
    return (
        <div className="grid grid-cols-6 gap-2 mt-[-2.5rem]">
            <div></div>
            <div className="col-span-6 gap-4">
                <form onSubmit={formik.handleSubmit} className="flex flex-col" action={"/formulaireNni"}>
                    <div className="relative px-4 py-5 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <label className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5">Votre demande de titre sera effectuée à partir de :</label>
                        <RadioGroup
                            options={radioOptions}
                            selectedOption={selectedOption}
                            onChange={handleRadioChange}
                            />
                        {isCountrySelectVisible && (
                            <CountrySelect options={countryOptions} />
                        )}
                        <label className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5">Type de demande</label>
                        <RadioGroup
                            options={typeDemandeOptions}
                            selectedOption={selectedTypeOption}
                            onChange={handleTypeChange}
                        />
                     
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-4 gap-5">
                            <FormInput label="Nom" type="text" id="fullname" />
                            <FormInput label="Prénom(s)" type="text" id="prenom" />
                            <FormInput label="Date de naissance" type="date" id="dob" />
                            <FormInput label="Lieu de naissance" type="text" id="lieu_naissance" />
                            <FormInput label="Nom de la mère" type="text" id="nom_mere" />
                            <FormInput label="Prénom de la mère" type="text" id="prenom_mere" />
                            <FormInput label="Telephone" type="text" id="telephone" />
                            <FormInput label="Adresse Email" type="email" id="email" />
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
        </div>
    );
};

export default page;
