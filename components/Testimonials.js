import React from 'react'
import Image from 'next/image'

function Testimonials() {
  return (
    <div className="py-20 ">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
                <div className="bg-white  p-2 shadow-md mb-5 flex flex-row gap-1" style={{ borderRadius: '15px 15px 15px 0' }}>
                    <Image src="/rectangleMessage.svg" width={15} height={15}/>
                    <h2 className="text-[12px] font-regular text-black" >
                        Testimonials
                     </h2>

                </div>
            

                <p className="text-4xl font-bold text-yellow-200 mb-4">
                    People Love Our Work!
                </p>
                <p className="text-lg text-white mb-12">
                    Find out what users say about our work
                </p>
            </div>
        </div>
        <div className="flex flex-col items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2 gap-5">
            <Image src="/instragramTestiSix.png" width={300} height={300}  className="lg:ml-7 rounded-lg"/>

            <Image src="/instragramTestiTwo.png" width={350} height={400} className=" rounded-lg"/>
            <Image src="/instragramTestiThree.png" width={300} height={300}  className="rounded-lg"/>
            <Image src="/instragramTestiFour.png" width={300} height={300}  className="lg:ml-9  rounded-lg"/>
            <Image src="/instragramTestiFive.png" width={300} height={300}  className="lg:mt-3 rounded-lg"/>
            <Image src="/instragramTestiOne.png" width={300} height={400} className="rounded-lg"/>


        </div>
    </div>
  )
}



export default Testimonials