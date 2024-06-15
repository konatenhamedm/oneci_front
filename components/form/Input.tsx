import React from "react";

interface InputProps {
  formik: any;
  type: string;
  name: string;
  placeholder: string;
  existe: boolean;
  longeur: number;
  message?: string;
}
const Input = ({
  formik,
  type,
  name,
  placeholder,
  existe,
  longeur,
  message,
}: InputProps) => {
  return (
    <>
      {" "}
      {/*  <label
        htmlFor={name}
        className={`block font-latoBold text-sm pb-2 ${
          formik.touched + "." + name && formik.errors + "." + name
            ? "text-red-400"
            : ""
        }`}
      >
        {formik.touched + "." + name && formik.errors + "." + name
          ? message
          : "name"}
      </label>
      <p></p> */}
      {/*    <label
            htmlFor="denominationSociale"
            className={`block font-latoBold text-sm pb-2 ${
              formik.touched.denominationSociale &&
              formik.errors.denominationSociale
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.denominationSociale &&
            formik.errors.denominationSociale
              ? formik.errors.denominationSociale
              : "Dénomination sociale"}
          </label>

          <p></p> */}
      <input
        className="bg-gray-700 flex w-full text-white border-white   placeholder-custom-placeholder placeholder-white  rounded-md p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-[#f1a730] transition ease-in-out duration-150"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values.nombre}
        onBlur={formik.handleBlur}
        onKeyPress={(event) => {
          if (existe) {
            if (longeur == 1) {
              if (!/[1-5]/.test(event.key)) {
                event.preventDefault();
              }
            } else {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }
          }
        }}
        maxLength={longeur}
      />
    </>
  );
};

export default Input;
