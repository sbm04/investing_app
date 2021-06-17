import React from 'react'
import bgimage from "./assets/p1.jpg";



const Details = () => {
    return <div class="flex flex-col  w-full ">

        {/* <img src={bgimage} className="h-3/5 w-screen absolute" /> */}
        <div className="p-8 flex-col  flex justify-center items-center w-full h-80  bg-gradient-to-r from-green-400 to-blue-500  border-2 border-gray-900">
            <p className="text-9xl font-bold m-10 z-10 text-white">
                InvestingGuru
            </p>
        </div>
        <div className="flex justify-between  p-6  border-2 border-gray-900">
            <div class="rounded-full h-24 w-24 flex items-center justify-center   border-gray-900 border-2 ">Company Icon</div>
            <div class="rounded-full py-3 px-6 border-gray-900 border-2">Follow</div>
        </div>

        <div className="flex flex-col  border-2 border-gray-900">
            <p className="text-sm font-bold p-1 z-10 text-black">Sagar Bansal</p>

            <p className="text-base bold p-2  z-10 text-black">
            Founder of Sagar Bansal Group of Companies, Currently leading the Bansal X Board as the Chairman. Trying to create a legacy by revolutionizing the infosec edu.
               
            </p>

        </div>
        <div className="flex flex-row justify-around  border-2 border-gray-900">
        <p className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">London, United Kingdom</p>
        <p className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">sagarbansal.com</p>
        <p className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">Joined January 2017</p>
        <p className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">1,852 Following
S</p>
        </div>
    </div>
}

export default Details