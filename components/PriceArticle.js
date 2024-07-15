import React from 'react'
import PricingCard from './PricingCardComponent'

function PriceArticle({onCtaClick}) {
  return (
    <div className=" mb-6 flex flex-col gap-10 mt-[8rem] ">
        <div className="flex flex-col ">
            <p className="text-2xl text-white font-medium"> Choose the Tier</p>
            <p className="text-gray-300"> Get started now </p>
        </div>


        <div className="flex md:flex-row  flex-col gap-8 mt-[1rem]">
                <PricingCard
            title="Basic Video"
            description="Perfect if you're just starting to publish your music videos in friendly budget"
            price={40}
            priceUnit="Video"
            features={[
                { 
                title: "1080p Video",
                description: "high quality rendered video"
                },
                {
                title: "Basic Text Animations",
                description: " ⁠1/2 fixed animations"
                },
                {
                title: "⁠Stock backgrounds",
                description: "Can be chosen by you."
                }
            ]}
            ctaText="Get Started"
            classIsON = {false}
            onCtaClick = {onCtaClick}

            />

            <PricingCard
            title="Premium Video"
            description="High quality lyrical vidoes with more features and better animations, "
            price={60}
            priceUnit="Video"
            features={[
                { 
                title: "4k Video",
                description: "4k rendered video"
                },
                {
                title: "Text Animations",
                description: "smooth and better text animations"
                },
                {
                title: "Images/Video backgrounds",
                description: "customisable video backgrounds"
                }
            ]}
            ctaText="Get Started"
            classIsON = {false}
            onCtaClick = {onCtaClick}
            />
            <PricingCard
            title="Animated Video"
            description="High quality lyrical vidoes with more features and better animations, "
            price={150}
            priceUnit="Video"
            features={[
                { 
                title: "Animated Music Video",
                description: "4k rendered video"
                },
                {
                title: "Text Animations",
                description: "smooth and better text animations"
                },
                {
                title: "Images/Video backgrounds",
                description: "customisable video backgrounds"
                }
            ]}
            ctaText="Get Started"
            classIsON = {true}
            onCtaClick = {onCtaClick}

            />
        </div>
    </div>
  )
}

export default PriceArticle