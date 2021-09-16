import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Card from "../Card";
import { useBoardModal } from "./BoardModalContext";
import X from "../../public/X.svg";

export default function BoardModal() {
  const { isOpen, setIsOpen, cardData } = useBoardModal();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 overflow-y-scroll"
          onClose={closeModal}
        >
          <div className="p-0 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" z-50 inline-block py-2 w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm">
                <button
                  type="button"
                  className=" absolute w-7 h-7 mr-2 right-0 border-solid border-2 border-transparent group-hover:text-gray-500 hover:border-gray-200 group-hover:text-gray-500transition-colors duration-300"
                  onClick={closeModal}
                >
                  <X />
                </button>
                {<Card cardData={cardData} />}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
