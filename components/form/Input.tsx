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
      <label
        htmlFor={name}
        className={`block font-latoBold text-sm pb-2 ${
          formik.touched + "." + "nombre" && formik.errors + "." + "nombre"
            ? "text-red-400"
            : ""
        }`}
      >
        {formik.touched + "." + "nombre" && formik.errors + "." + "nombre"
          ? message
          : ""}
      </label>
      <p></p>
      <input
        className="bg-gray-700 text-white border-white   placeholder-custom-placeholder placeholder-white  rounded-md p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-[#f1a730] transition ease-in-out duration-150"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values.nombre}
        onBlur={formik.handleBlur}
        onKeyPress={(event) => {
          if (existe) {
            if (!/[1-5]/.test(event.key)) {
              event.preventDefault();
            }
          }
        }}
        maxLength={longeur}
      />
    </>
  );
};

export default Input;
