const TareasSummary4 = () => {

   return (
      <div className="flex flex-col w-3/6 h-32 relative">
         <div className="flex items-center justify-center h-screen">
            <div className="relative">
               <svg width="100" height="100" viewBox="0 0 42 42" className="donut">
                     <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f1f1f1" strokeWidth="3"></circle>
                     <path className="donut-segment" d="M21 5.084505690810463 A 15.91549430918954 15.91549430918954 0 1 1 20.9999 5.084505690810463"
                        fill="transparent" stroke="#d8d8d8" strokeWidth="3" strokeDasharray="calc(77 * 100 / 100) calc(100 - (77 * 100 / 100))"
                        strokeDashoffset="25" strokeLinecap="round"></path>
               </svg>
               <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-black">77%</span>
            </div>
         </div>
      </div>
   );
};

export default TareasSummary4;