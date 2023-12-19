import Modal from "react-modal";
import Image from "next/image";
import { MdOutlineClose, MdLocalPhone, MdOutlineWeb } from "react-icons/md";
import Link from "next/link";

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
            <h1 className="text-2xl font-bold mb-2">
               Solicitar una llamada de mi gestor
            </h1>
            <form className="w-full max-w-lg flex flex-col justify-center items-center gap-5">
               <p className="text-base text-center">
                  Bienvenido al sistema de tickets donde podrás conectar
                  directamente con tu gestor personal a través de una llamada
                  teléfonica. Este sistema te ofrece una comunicación rápida y
                  eficaz para resolver todas tus consultas y necesidades.
               </p>
               <Image
                  src="/popupContactaGestorPersonal.png"
                  width={150}
                  height={150}
               />
               <div className="flex items-center justify-center gap-4">
                  <Link
                     href="#"
                     className="bg-mainColor2 hover:bg-mainColor3 text-white
                     font-bold py-2 px-4 rounded focus:outline-none
                     focus:shadow-outline flex items-center gap-2 transition
                     ease"
                     onClick={onRequestClose}
                  >
                     <MdLocalPhone />
                     Llamar a mi gestor personal
                  </Link>
                  <Link
                     href="/tickets"
                     className="bg-mainColor2 hover:bg-mainColor3 text-white
                     font-bold py-2 px-4 rounded focus:outline-none
                     focus:shadow-outline flex items-center gap-2 transition
                     ease"
                     onClick={onRequestClose}
                  >
                     <MdOutlineWeb />
                     Ir a panel
                  </Link>
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
