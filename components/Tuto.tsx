"use client";
import React from "react";

function Tuto() {
  return (
    <>
      <dialog
        id="my_modal_3"
        className="modal border-2 border-[rgba(75,30,133,0.5)]"
      >
        <div className="modal-box w-11/12 max-w-3xl border-2 border-double border-white bg-gradient-to-r from-[#75d4c3] to-[#f1a730]">
          <form method="dialog border-b-2 border-[#f1a730]">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-white">Tutoriel!</h3>

          <iframe
            className="w-full h-64 my-10 rounded-lg md:h-80"
            src="https://www.youtube.com/embed/A-VRtdr9lKc"
            title="Tutoriel OneCI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </dialog>
    </>
  );
}

export default Tuto;
