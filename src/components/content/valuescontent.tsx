import React from 'react'
import kotimainen from '../../assets/kotimainen.png'
import laatu from '../../assets/laatu.png'
import laatutakuu from '../../assets/laatutakuu.png'

const valuescontent = () => {
  return (
    <div className="lg:flex lg:justify-center my-7">
  <div
    className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center">
    <a href="#!">
      <img
        className="rounded-t-lg sm:rounded-tr-none h-52"
        src={kotimainen}
        alt="Kotimainen" />
    </a>
    <h5 className="mb-2 text-xl font-medium leading-tight text-black">KOTIMAINEN - OULULAINEN</h5>
      <p className="mb-4 text-base text-black text-center">
        Yrityksemme on ylpeästi kotimainen ja juuremme ovat Oulussa. Käytämme paikallista työvoimaa.
      </p>
  </div>

  <div
    className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center">
    <a href="#!">
      <img
        className="rounded-t-lg sm:rounded-tr-none h-52"
        src={laatu}
        alt="Laatu" />
    </a>
    <h5 className="mb-2 text-xl font-medium leading-tight text-black">LAADUKKAAT TYÖVÄLINEET</h5>
      <p className="mb-4 text-base text-black text-center">
        Käytämme vain jatkuvaan ammattikäyttöön tarkoitettuja tekstiilipesureita ja erittäin laadukkaita pesuaineita.
      </p>
    {/* <div className="p-6">
      <h5 className="mb-2 text-xl font-medium leading-tight text-black">Card title</h5>
      <p className="mb-4 text-base text-black">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div> */}
  </div>

  <div
    className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center">
    <a href="#!">
      <img
        className="rounded-t-lg sm:rounded-tr-none h-52"
        src={laatutakuu}
        alt="Laatutakuu" />
    </a>
    <h5 className="mb-2 text-xl font-medium leading-tight text-black">100% LAATUTAKUU AINA</h5>
      <p className="mb-4 text-base text-black text-center">
        Meillä on 100% laatutakuu. Teemme työn uudestaan tai palautamme rahat, jos työn jälki ei miellytä silmää.
      </p>
    {/* <div className="p-6">
      <h5 className="mb-2 text-xl font-medium leading-tight text-black">Card title</h5>
      <p className="mb-4 text-base text-black">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div> */}
  </div>
</div>
  )
}

export default valuescontent
