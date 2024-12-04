import React from 'react'

const footer = () => {
  return (
    <div>
      <footer id = "Yhteystiedot" className="bg-white rounded-lg shadow dark:bg-gray-800">
    <div className = "w-full mx-auto max-w-full p-4 md:flex justify-center text-center">
      <span className = "text-sm text-white sm:text-center dark:text-white">
        myynti@pesuplus.fi<br/>
        puh. 044 243 6843<br/>
        FineTrading Oy<br/>
        Y-tunnus: 2838964-4<br/>
        Jäkäläkuja 2, 90650 Oulu
    </span>
    <div className = "flex items-center justify-center flex-row ml-5">
        <div className = "divide-y divide-gray-200 dark:divide-gray-700">
            <div className = "mt-2 sm:pt-0 sm:ml-5 sm:mt-0">
                <div className = "flex items-center">
                    <div className = "flex-shrink-0">
                    </div>
                    <div className = "text rap">
                    <div className = 'mx-3'>
                    <img className = "w-20 h-20 rounded-full" src = "https://i.imgur.com/gBO4NHI.png" alt = "Manu Mattola"/>
                    </div>
                    <div className = "">
                        <p className = "text-sm font-medium text-gray-900 truncate dark:text-white">
                            Manu Mattola
                        </p>
                        <p className = "text-sm text-gray-500 truncate dark:text-gray-400">
                                Toimitusjohtaja
                        </p>
                        </div>
                        </div>
                        <div className = "text rap">
                        <div className = 'mx-3'>
                    <img className = "w-20 h-20 rounded-full" src = "https://i.imgur.com/VaxbSUe.png" alt = "Ville Vähänen"/>
                    </div>
                    <div className = "">
                        <p className = "text-sm font-medium text-gray-900 truncate dark:text-white">
                            Ville Vähänen
                        </p>
                        <p className = "text-sm text-gray-500 truncate dark:text-gray-400">
                                Talousjohtaja
                        </p>
                        </div>
                        </div>
                </div>
            </div>
            </div>
    </div>
    </div>
</footer>
    </div>
  )
}

export default footer
