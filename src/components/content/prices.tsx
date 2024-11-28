import React from 'react'
import kotimainen from '../../assets/kotimainen.png'
import laatu from '../../assets/laatu.png'
import sofa from '../../assets/sofa.png'
import bed from '../../assets/bed.png'
import car from '../../assets/car.png'
import carpet from '../../assets/carpet.png'
import Otherwashable from './otherwashable'
import Valuescontent from './valuescontent'
const prices = () => {
  return (
    <div className='flex flex-wrap'>
    <div className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-9" id='sofa'>
    <div className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px]" style={{boxShadow: "-9px 13px 20px 5px black"}}>
        <img src={sofa} alt="sofa"/>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black text-white bg-fixed opacity-50"></div>
      </div>
      <div className='flex flex-col items-center absolute'>
      <h5 className="mb-2 text-5xl font-medium leading-tight text-white">Sohvan pesu</h5>
        <p className="mb-4 text-xl text-white text-center">
          Pesemme kangas- ja nahkapintaiset sohvat ja nojatuolit kätevästi paikan päällä.
        </p>
        <h5 className="mb-2 text-xl leading-tight text-white font-bold">Sohvapesun hinnasto</h5>
        <p className="mb-4 text-xl text-white text-center">
            Nojatuoli: 49 €{<br/>}
            Kahden istuttava: 69 €{<br/>}
            Kolmen istuttava: 98 €{<br/>}
            Neljän istuttava: 126 €{<br/>}
            Viiden istuttava: 147 €{<br/>}
            Kuuden istuttava: 161 €{<br/>}
        </p>
        <div className="flex justify-center mt-2">
          <a
            href="/"
            className="py-3 px-4 mx-3 rounded-[40px] w-48 border-2 border-white text-white text-center"  style={{fontSize: "x-large",
              boxShadow: " 0px 1px 5px 0px, inset 0px 0px 20px 11px black"}}
          >
            Varaa aika
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-9" id='bed'>
    <div className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px]" style={{boxShadow: "-9px 13px 20px 5px black"}}>
        <img
          src={bed} alt="bed"/>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
      </div>
      <div className='flex flex-col items-center absolute'>
      <h5 className="mb-2 text-5xl font-medium leading-tight text-white">Sänkypesun hinnasto</h5>
        <p className="mb-4 text-xl text-white text-center">
        Sängyn tekstiilipesussa poistamme sängystä mm. rasvalian, pölypunkit{<br/>}  ja kuolleet ihosolut. Pesu tekee sängystä raikkaan tuoksuisen.{<br/>} Sänky pestään kätevästi paikan päällä.
        </p>
        <h5 className="mb-2 text-xl leading-tight text-white font-bold">Sänkypesun hinnasto</h5>
        <p className="mb-4 text-xl text-white text-center">
            Yhden hengen sänky: 66 €{<br/>}
            Parisänky: 94 €{<br/>}
        </p>
        <div className="flex justify-center mt-2">
          <a
            href="/"
            className="py-3 px-4 mx-3 rounded-[40px] w-48 border-2 border-white text-white text-center"  style={{fontSize: "x-large",
              boxShadow: " 0px 1px 5px 0px, inset 0px 0px 20px 11px black"}}
          >
            Varaa aika
          </a>
        </div>
      </div>
    </div>
    <div className='min-w-[100%] my-6'>
    <h5 className="mb-2 text-xl leading-tight text-black font-bold text-center">Pesemme myös.. </h5>
    <Otherwashable></Otherwashable>
    </div>
    <div className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-9" id='car'>
    <div className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px]" style={{boxShadow: "-9px 13px 20px 5px black"}}>
        <img
          src={car} alt="car"/>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
      </div>
      <div className='flex flex-col items-center absolute'>
      <h5 className="mb-2 text-5xl font-medium leading-tight text-white">Auton tekstiilipesu</h5>
        <p className="mb-4 text-xl text-white text-center">
        Auton penkkien pesussa poistetaan ensin kuivat roskat, jonka jälkeen{<br/>} pinttynyt lika poistetaan tekstiilipesurilla kätevästi paikan päällä.
        </p>
        <h5 className="mb-2 text-xl leading-tight text-white font-bold">Autopesun hinnasto</h5>
        <p className="mb-4 text-xl text-white text-center">
          Yksittäinen penkki: 35 €{<br/>}
          Mopoauto: 60 €{<br/>}
          2-paikkainen auto: 60 €{<br/>}
          9-paikkainen auto: 120 €{<br/>}
          9-paikkainen auto: 160 €{<br/>}
        </p>
        <div className="flex justify-center mt-2">
          <a
            href="/"
            className="py-3 px-4 mx-3 rounded-[40px] w-48 border-2 border-white text-white text-center"  style={{fontSize: "x-large",
              boxShadow: " 0px 1px 5px 0px, inset 0px 0px 20px 11px black"}}
          >
            Varaa aika
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:flex-row sm:rounded-e-none items-center justify-center mb-9" id='carpet'>
    <div className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat lg:rounded-[30px]" style={{boxShadow: "-9px 13px 20px 5px black"}}>
        <img
          src={carpet} alt="carpet"/>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
      </div>
      <div className='flex flex-col items-center absolute'>
      <h5 className="mb-2 text-5xl font-medium leading-tight text-white">Maton pesu</h5>
        <p className="mb-4 text-xl text-white text-center">
        Maton pesussa poistetaan ensin kuivat roskat, jonka {<br/>}jälkeen pinttynyt lika pestään pois tekstiilipesurilla kätevästi paikan päällä.
        </p>
        <h5 className="mb-2 text-xl leading-tight text-white font-bold">Mattopesun hinnasto</h5>
        <p className="mb-4 text-xl text-white text-center">
            XS-matto (0,9 m²): 9 €{<br/>}
            S-matto (1 m²): 14 €{<br/>}
            M-matto (3 m²): 38 €{<br/>}
            L-matto (9 m²): 59€{<br/>}
            XL-matto (8 m²): 89 €{<br/>}
            XXL-matto (10 m²): 99 €{<br/>}
        </p>
        <div className="flex justify-center mt-2">
          <a
            href="/"
            className="py-3 px-4 mx-3 rounded-[40px] w-48 border-2 border-white text-white text-center"  style={{fontSize: "x-large",
              boxShadow: " 0px 1px 5px 0px, inset 0px 0px 20px 11px black"}}
          >
            Varaa aika
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default prices
