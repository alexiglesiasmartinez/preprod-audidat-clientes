import Modal from "react-modal";

import { MdOutlineClose, MdSend } from "react-icons/md";

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
               width: "30%",
               minHeight: "200px",
            },
         }}
      >
         <div className="flex flex-col items-center py-5">
            <h1 className="text-xl font-bold mb-2">Invita a una empresa</h1>
            <form className="w-full max-w-sm">
               <div className="mb-4">
                  <label
                     className="block text-black text-sm font-normal mb-2 text-center"
                     htmlFor="email"
                  >
                     Escribe el correo de la empresa a la que quieres invitar
                  </label>
                  <input
                     className="appearance-none border rounded shadow w-full py-2 px-3 text-black focus:outline-none focus:shadow-outline text-center"
                     id="email"
                     type="email"
                     placeholder="correo@empresa.com"
                  />
               </div>
               <div className="flex items-center justify-center">
                  <button
                     className="bg-mainColor2 hover:bg-mainColor3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2 transition ease"
                     type="submit"
                  >
                     <MdSend />
                     Enviar invitación
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
