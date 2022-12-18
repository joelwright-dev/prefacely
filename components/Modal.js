import { ArrowNarrowRight, X, PlugX } from "tabler-icons-react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { AlertTriangle } from "tabler-icons-react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const Modal = ({ closeModal, title, body, button, email, formdata }) => {
  console.log(formdata);

  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        className="inset-y-1/2 m-auto bg-white shadow-solid-primary p-5 w-96 rounded-xl h-80 flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button
          className="absolute top-5 right-5"
          onClick={() => closeModal()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X />
        </motion.button>
        <div className="grid grid-cols-1 gap-10 content-center">
          <div className="text-center">
            <p className="font-semibold">{title}</p>
            <p className="text-slate-500">{body}</p>
            {email ? (
              <div className="form-group flex flex-col sm:flex-row mt-5 mb-5">
                <p className="flex-none">Your email:</p>
                <div className="flex w-full">
                  <input
                    type="text"
                    name="ctr"
                    style={{ outline: "none" }}
                    className="border-b-2 border-blue-500 sm:ml-2 flex-1"
                  />
                </div>
              </div>
            ) : (
              <></>
            )}{" "}
            <motion.button
              className="bg-blue-500 text-white p-2 pl-3 pr-3 rounded-3xl w-32 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => closeModal()}
            >
              {button}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
