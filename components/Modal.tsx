import React, { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode | ReactNode[];
};

const Modal = ({ isOpen, setIsOpen, children }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <div className={`${isOpen ? "fixed z-50" : "hidden"}`}>
      <div
        className="fixed top-0 left-0 z-0 h-screen w-screen bg-black/30 backdrop-blur-[2px] "
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="fixed left-1/2 top-1/2 z-10 flex min-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg bg-white p-4 shadow-lg ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
