import React, { useEffect } from "react";
interface ModalDynamiqueProps {
  show: any;
  onClose: any;
}

const ModaleVideo: React.FC<ModalDynamiqueProps> = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <>
      <div
        className="
    justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-auto 
    fixed 
    inset-0 
    z-50 
    outline-none 
    focus:outline-none
    bg-transparent
    
  "
      >
        <div className="modal-box w-11/12 max-w-3xl border-2 border-double border-white bg-gradient-to-r from-[#75d4c3] to-[#f1a730]">
          <form method="dialog border-b-2 border-[#f1a730]">
            <div
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
            >
              ✕
            </div>
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
      </div>
    </>
  );
};

export default ModaleVideo;
