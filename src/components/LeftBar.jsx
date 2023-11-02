import React from "react";
import Image from "next/image";
import Link from "next/link";

const LeftBar = ({ children }) => {
   return (
      <aside className="w-1/6 h-screen bg-gray-200 bg-secondaryGradient text-white p-5">
         Sidebar Izquierdo
      </aside>
   );
};

export default LeftBar;
