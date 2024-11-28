import React from 'react'
import nahkakaluste from '../../assets/nahkakalusteet.png'
import pehmolelu from '../../assets/pehmolelu.png'
import puutarhakaluste from '../../assets/puutarhakaluste.png'
const otherwashable = () => {
    return (
        <div className="lg:flex lg:justify-center">
      <div
        className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center">
        <a href="#!">
          <img
            className="rounded-t-lg sm:rounded-tr-none h-52"
            src={nahkakaluste}
            alt="nahkakaluste" />
        </a>
        <h5 className="mb-2 text-xl font-medium leading-tight text-black">NAHKAKALUSTEET</h5>
          <p className="mb-4 text-base text-black text-center">
            Pesemme ja hoitokäsittelemme nahkakalusteet käsin.
          </p>
      </div>
    
      <div
        className="flex flex-col rounded-lg sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none items-center">
        <a href="#!">
          <img
            className="rounded-t-lg sm:rounded-tr-none h-52"
            src={pehmolelu}
            alt="pehmolelu" />
        </a>
        <h5 className="mb-2 text-xl font-medium leading-tight text-black">PEHMOLELUT</h5>
          <p className="mb-4 text-base text-black text-center">
            Pesemme pehmolelut paikanpäällä.
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
            src={puutarhakaluste}
            alt="puutarhakaluste" />
        </a>
        <h5 className="mb-2 text-xl font-medium leading-tight text-black">PUUTARHAKALUSTEET</h5>
          <p className="mb-4 text-base text-black text-center">
            Pesemme myös puutarhakalusteiden tekstiilipehmusteet!
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

export default otherwashable
