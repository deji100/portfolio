import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent overflow-hidden text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                   {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Faruq Deji Adeyemi</span>    
                    </p> */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">davidchinedu274@gmail.com</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">205 Independence Ave, Quincy , Ma, USA.</span>    
                    </p>
                    <p className="flex flex-row items-center mt-[15px]  cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">+2349059487049, +1 (224) 534-9898, +1 (617) 468-6922</span>    
                    </p>
                </div>
            </div>

            <div className="my-[40px] text-[15px] text-center">
                &copy;2024. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer