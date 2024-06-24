// import React from 'react'
// import { BotMessageSquare } from "lucide-react";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// export const Services = () => {
//   return (
//     <div className="mt-10">
       
//     <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        
//       Our {" "}
//       <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
//         Services
//       </span>
//     </h2>
//     <div className='max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-4
//     sm:grid-cols-2 gap-6'>
//         <div className='shadow-lg p-4 text-center'>
//         <i class="fa-regular fa-user"></i>
//             <h3 className='text-xl py-2'> IT Solutions</h3>
//             <p>We create IT-enabled business solutions for our clients by leveraging our domain and business expertise along with a complete range of services.</p>
//         </div>
//     </div>
    
//     </div>
//   )
// }
import { services } from "../constants";

const Services = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-medium font-medium px-2 py-1 uppercase">
          Our Services
        </span>
        <h2 className="text-1xl sm:text-2xl lg:text-2xl mt-10 lg:mt-20 tracking-normal">
        We create IT-enabled business solutions for our clients by leveraging our domain  {" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          and business expertise along with a complete range of services.
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {services.map((services, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {services.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{services.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {services.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
