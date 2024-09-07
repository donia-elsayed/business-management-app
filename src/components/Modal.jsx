import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";

const Modal = ({ isOpen, closeModal, title, children }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex justify-center items-center min-h-screen text-center">
          <DialogPanel as="div" className="w-full max-w-md">
            <div className="relative w-full px-6 py-8 my-6 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <DialogTitle>{title}</DialogTitle>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-red-500"
                >
                  <XCircleIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              {children}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
