import React from 'react';

const PricingCard = ({ 
  title, 
  description, 
  price, 
  priceUnit, 
  features, 
  ctaText,
  classIsON,
  onCtaClick
}) => {
  return (
    <div className={`w-[22rem] h-[33rem] hover:translate-y-[-7px] transition ease-in-out  rounded-xl shadow-inner ${classIsON ? "bg-gradient-to-br from-[#f0ecfc] to-[#c797eb]" : "bg-white" }`}>
      <div className="pt-11 pl-7">
        <div className="flex flex-col gap-1">
           <div className="flex flex-row gap-1">
             <p className="text-xl font-regular">{title}</p>
             {classIsON && 

             <div className="w-[5.8rem] h-[1.7rem] bg-yellow-200 text-[12px] items-center rounded-lg justify-center pl-[8px] pt-[5px] mt-[1px]">
                <p className="">
                    Most Popular
                </p>
             </div>
            }   
          </div> 
          <p className="w-[16rem] text-[12px] font-regular text-gray-500">{description}</p>
        </div>
        <div className="mt-6 w-[17rem] h-[4rem] bg-slate-100 rounded-md flex flex-row gap-[4px]">
          <p className="pt-3 pl-5 text-3xl font-semibold items-center">
            ${price}
          </p>
          <p className="text-gray-400 text-[12px] pt-7"><span className="font-bold">/</span> {priceUnit}</p>
        </div>

        <div className="mt-9 ml-5 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row gap-3 items-center">
              <p className={`w-[2.3rem] h-[2.3rem] rounded-full border-[2px]  text-center pt-[4.2px] ${classIsON ? "border-white" : "border-gray-300"} ` }>{index + 1}</p>
              <div className="flex flex-col">
                <p className="text-md font-medium">{feature.title}</p>
                <p className="text-[13px] text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[19rem] h-[3rem] bg-slate-100 rounded-md flex justify-center items-center mt-7 cursor-pointer">
          <button onClick={onCtaClick}>
             <p className="text-[15px] text-gray-800 font-medium cursor-pointer">{ctaText}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;