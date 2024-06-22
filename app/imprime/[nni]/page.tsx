"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import Input from "@/components/form/Input";
//import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import * as Yup from "yup";
import Documents from "@/components/Documents";
import BoutonValide from "@/components/form/BoutonValide";
import { useRouter, useSearchParams } from "next/navigation";

//const MyDoc = <Document>{/* <Page>// My document data</Page> */}</Document>;

function Imprime({ params }: { params: { nni: string } }) {
  const router = useRouter();

  const searchParams = useSearchParams();
  //const nni = searchParams.get("nni");
  const type = searchParams.get("type");

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  //const [instance, updateInstance] = usePDF({ document: MyDoc });

  const formik = useFormik({
    initialValues: {
      nombre: "",
    },

    validationSchema: Yup.object({
      nombre: Yup.string().required(
        "Le nombre de copies est requis pour continuer le processus"
      ),
    }),

    onSubmit: (values) => {
      // alert("");
      setIsLoading(true);
      router.push(
        "/operateur/" + params.nni + "?nombre=" + values.nombre + "&doc=" + type
      );
      /*  await axiosAuthapi
        .get("/check/" + values.nni)
        .then((res) => {
          //alert(values.nni);

          if (res.data.status === "404") {
            setIsLoading(false);

            if (modalElementNotFound) {
              modalElementNotFound.showModal();
            }
          } else {
            if (modalElementNotFound) {
              modalElementNotFound.close();
            }

            router.push("/service/" + values.nni);
          }
        })
        .catch((err) => {
          // alert(values.nni);
          if (modalElementServeur) {
            modalElementServeur.showModal();
          }
        }); */
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-2 ">
        {/*   <div className=" border-4 border-[#f1a730] to-[#75d4c3] from-[#f1a730] h-[410px]">
          <h1>hghgss</h1>
        </div> */}
        <div
          role="alert"
          className="mx-auto md:w-[640px] rounded-lg border-2 h-[410px] border-[#f1a730] bg-white p-4 shadow-lg sm:p-6 lg:p-8 before:hover:rounded-b-2xl col-span-2"
        >
          <div className="flex h-full items-center gap-4">
            {/*  <PDFViewer className="w-full h-full"> */}
            <Documents type={type} />
            {/*  </PDFViewer> */}
            {/*  <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                  <Text>Section #2</Text>
                </View>
              </Page>
            </Document> */}
          </div>
        </div>

        <div
          role="alert"
          className="mx-auto md:max-w-lg rounded-lg border-2 md:h-[410px] border-[#f1a730] bg-white p-4 shadow-lg sm:p-6 lg:p-8 before:hover:rounded-b-2xl"
        >
          <div className="flex items-center gap-4">
            {/* <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span> */}

            <div className="flex flex-col items-center justify-center light">
              <div className="w-full max-w-md  bg-white rounded-lg shadow-sm md:p-6 p-11">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Nombre de copies
                </h2>

                <form
                  className="flex flex-col"
                  onSubmit={formik.handleSubmit}
                  action={` ${"/imprime/" + params.nni + "?doc=" + type}`}
                >
                  <label
                    htmlFor="nombre"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.nombre && formik.errors.nombre
                        ? "text-red-400"
                        : ""
                    }`}
                  >
                    {formik.touched.nombre && formik.errors.nombre
                      ? formik.errors.nombre
                      : ""}
                  </label>

                  <p></p>

                  <Input
                    formik={formik}
                    type="text"
                    name="nombre"
                    placeholder="Entrez votre numéro national d'identification"
                    existe={true}
                    longeur={1}
                  />
                  {/*  <input
                    className="bg-gray-700 text-white border-0 border-[#75d4c3] rounded-md p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-[#f1a730] transition ease-in-out duration-150"
                    type="text"
                    name="nombre"
                    placeholder="Entrez votre numéro national d'identification"
                    onChange={formik.handleChange}
                    value={formik.values.nombre}
                    onBlur={formik.handleBlur}
                    onKeyPress={(event) => {
                      if (!/[1-5]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    maxLength={1}
                  /> */}
                  {/* 
                  <button
                   
                    className="bg-gradient-to-r from-[#75d4c3] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                    type="submit"
                  >
                    Soumettre la demande
                  </button> */}
                  {/* 
                  <Link
                    href={instance.url ? instance.url : ""}
                    download="test.pdf"
                  >
                    Download
                  </Link> */}
                  <BoutonValide
                    title="Valider et Continuer"
                    colorFrom="#75d4c3"
                    colorTo="#f1a730"
                  />
                </form>

                <div className="flex justify-center mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imprime;
