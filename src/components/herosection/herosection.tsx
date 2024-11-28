import React from 'react'
import landingpage_img from '../landingpage/sofa_e.jpg'

const herosection = () => {
    return (
    <div className='w-full h-[90vh]' id='hero' >
        <img className='w-full h-full object-cover' src={landingpage_img} alt="landingpage"/>
        <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>

        <div className="absolute top-[10%] left-[50%] translate-x-[-50%] flex flex-col items-center mt-2 lg:mt-0 text-white">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" >
          PesuPlus 
          </h1>
          <p className='text-2xl sm:text-2xl lg:text-2xl text-center tracking-wide' >
            Tekstiilipintojen pesu paikan päällä.
          </p>
        <p className="mt-6 text-xl lg:text-2xl sm:text-xl text-center text-white-500 max-w-4xl">
        PesuPlus tuo tekstiilipintojen pesupalvelut kätevästi koteihin ja yrityksiin Oulun alueella.
        </p>
        { <div className="flex justify-center mt-2">
          <a
            href="/"
            className="py-3 px-4 mx-3 rounded-[40px] w-60 border-2 border-white text-white text-center"  style={{fontSize: "x-large",
              boxShadow: " 0px 1px 5px 0px"}}
          >
            Varaa aika
          </a>
        </div> }
      </div>
      </div>
    );
  };
export default herosection