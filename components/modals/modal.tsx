"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  size: boolean;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  size,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleCloses = useCallback(() => {
    onClose();
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
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
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
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
                bg-[#f1a730]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-4
                    text-white
                  "
                  onClick={handleCloses}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg text-white font-semibold item-center justify-center">
                  {title}
                </div>
              </div>
              {/*body*/}
              <form onSubmit={onSubmit} className="">
                <div className="relative p-2 flex-auto">{body}</div>
                {/*footer*/}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
