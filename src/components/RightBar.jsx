"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

const RightBar = ({ children }) => {
   const [expanded, setExpanded] = useState(true);
   const [addContentWhenExpand, setAddContentWhenExpand] = useState(true);
   const [showLOPDoptions, setShowLOPDoptions] = useState(true);
   const [isMobileView, setIsMobileView] = useState(false);

   const toggleWidth = () => {
      setExpanded(!expanded);
      setAddContentWhenExpand(!addContentWhenExpand);
   };

   useEffect(() => {
      if (expanded) {
         setShowLOPDoptions(true);
      } else {
         setShowLOPDoptions(false);
      }
   }, [expanded]);

   useEffect(() => {
      const handleResize = () => {
         const isMobile = window.innerWidth < 1280;
         setIsMobileView(isMobile);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <aside className="w-1/6 h-screen bg-gray-200">
         {/* Contenido del sidebar derecho */}
         Sidebar Derecho
      </aside>
   );
};

export default RightBar;
