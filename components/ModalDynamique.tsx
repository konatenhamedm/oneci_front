import { title } from "process";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalDynamiqueProps {
  show: any;
  onClose: any;
  content: React.ReactElement;
  title?: string;
  size?: boolean;
  footer?: React.ReactElement;
  actionLabel?: string;
  onCloseExiste?: boolean;
}

/* const ModalDynamique = ({ show, onClose, content }) => {
 */

const ModalDynamique: React.FC<ModalDynamiqueProps> = ({
  show,
  onClose,
  content,
  title,
  size,
  footer,
  actionLabel,
  onCloseExiste,
}) => {
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
        <div
          className={`
           translate
           duration-300
           h-full
           ${
             size
               ? "mt-[100px] md:w-1/4   lg:w-1/4   xl:w-1/4"
               : "md:w-4/6  lg:w-3/6 xl:w-2/5"
           }
           
          
         `}
        >
          <div
            className={`
            translate
            duration-300
            h-full
            ${show ? "translate-y-0" : "translate-y-full"}
            ${show ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              mt-[231px]
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
              border-2 border-double border-[#f1a730]
            "
            >
              {/*header*/}
              <div
                className="
                flex 
                items-center 
                p-2
                rounded-t
                justify-center
                relative
                border-b-[1px]
                bg-gradient-to-r from-[#75d4c3] to-[#f1a730]
                "
              >
                {onCloseExiste && (
                  <div
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={onClose}
                  >
                    <IoMdClose size={20} />
                  </div>
                )}
                <div className="text-lg text-white font-semibold item-center justify-center">
                  {title}
                </div>
              </div>
              {/*body*/}

              <div className="justify-center">
                {content}
                <div className="flex flex-col gap-2 p-2">
                  <div
                    className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                  >
                    {actionLabel && (
                      <button
                        type="submit"
                        className=" bg-sky-500  font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                      >
                        {actionLabel}
                      </button>
                    )}
                  </div>
                  {footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDynamique;
