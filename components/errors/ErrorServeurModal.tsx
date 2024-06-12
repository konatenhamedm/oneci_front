"use client";
import React from "react";

function ErrorServeurModal() {
  return (
    <>
      <dialog
        id="my_modal_serveur"
        className="modal border-2 border-[rgba(75,30,133,0.5)]"
      >
        <div className="modal-box w-4/12max-w-3xl border-2 border-double border-white bg-white">
          <form method="dialog border-b-2 border-[#f1a730]">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-black">Alerte erreur!</h3>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-red-600  w-12 h-12 dark:text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Oops une erreur est survenue
            </h3>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ErrorServeurModal;
