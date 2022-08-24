import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

const Modal = ({ isOpen, setIsOpen, children }: Props) => {
  const closeOnEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    [isOpen]
  );
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    window.addEventListener("keyup", closeOnEscape);
    return () => {
      window.removeEventListener("keyup", closeOnEscape);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className={`${isOpen ? "fixed z-50" : "hidden"}`}>
      <div
        className="fixed top-0 left-0 z-0 h-screen w-screen bg-black/30 backdrop-blur-[2px] "
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

export default Modal;
