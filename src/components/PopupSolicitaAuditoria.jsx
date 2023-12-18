import Modal from "react-modal";

import { MdOutlineClose, MdCheck } from "react-icons/md";

const CustomModal = ({ isOpen, onRequestClose }) => {
   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         style={{
            overlay: {
               backgroundColor: "rgba(0, 0, 0, 0.75)",
               zIndex: "50",
            },
            content: {
               top: "50%",
               left: "50%",
               right: "auto",
               bottom: "auto",
               marginRight: "-50%",
               transform: "translate(-50%, -50%)",
               border: "1px solid #ccc",
               background: "#fff",
               overflow: "auto",
               WebkitOverflowScrolling: "touch",
               borderRadius: "10px",
               outline: "none",
               padding: "20px",
               width: "40%",
               minHeight: "200px",
            },
         }}
      >
         <div className="flex flex-col gap-1 items-center py-5">
            <h1 className="text-2xl font-bold mb-2">Solicita una auditoría</h1>
            <form className="w-full max-w-sm">
               <div className="mb-4">
                  <p className="text-base text-center">
                     ¿Desea que su asesor personal se ponga en contacto con
                     usted para hacer una auditoría de cumplimiento?
                  </p>
               </div>
               <div className="flex items-center justify-center">
                  <button
                     className="bg-mainColor2 hover:bg-mainColor3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2 transition ease"
                     onClick={onRequestClose}
                  >
                     <MdCheck />
                     Sí, quiero solicitar la auditoría
                  </button>
               </div>
            </form>
            <button
               onClick={onRequestClose}
               className="absolute top-0 right-4 mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-1 rounded-full focus:outline-none focus:shadow-outline transition ease"
            >
               <MdOutlineClose />
            </button>
         </div>
      </Modal>
   );
};

export default CustomModal;
