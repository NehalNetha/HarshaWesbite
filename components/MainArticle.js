"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MainArticle() {
    const words = ["Lyric Videos", "Captivating Visuals", "Elevating Your Music", "Visual Stories"];
    const [currentWord, setCurrentWord] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentChar, setCurrentChar] = useState('');

    useEffect(() => {
        const typeEffect = () => {
            if (currentIndex < words.length) {
                const word = words[currentIndex];
                const timeout = setTimeout(() => {
                    setCurrentChar(word.slice(0, currentChar.length + 1));
                    if (currentChar.length === word.length) {
                        setTimeout(() => {
                            setCurrentChar('');
                            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                        }, 1000); // Wait for 1 second before moving to the next word
                    }
                }, 150); // Adjust typing speed here

                return () => clearTimeout(timeout);
            }
        };

        typeEffect();
    }, [currentChar, currentIndex]);
  return (
    <div className="relative pb-[10rem]"> {/* Added padding-bottom */}
    <style jsx>{`
                @keyframes floatLeft {
                    0% {
                        transform: translateX(0px) translateY(0px);
                    }
                    50% {
                        transform: translateX(-100px) translateY(-50px);
                    }
                    100% {
                        transform: translateX(0px) translateY(0px);
                    }
                }
                @keyframes floatRight {
                    0% {
                        transform: translateX(0px) translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateX(50px) translateY(-200px) rotate(20deg);
                    }
                    100% {
                        transform: translateX(0px) translateY(0px) rotate(0deg);
                    }
                }
                @keyframes floatMiddle {
                    0% {
                        transform: translateX(0px) translateY(0px) rotate(-20deg);
                    }
                    50% {
                        transform: translateX(50px) translateY(100px) rotate(40deg);
                    }
                    100% {
                        transform: translateX(0px) translateY(0px) rotate(-20deg);
                    }
                }
                @keyframes floatRightest {
                    0% {
                        transform: translateX(0px) translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateX(50px) translateY(100px) rotate(40deg);
                    }
                    100% {
                        transform: translateX(0px) translateY(0px) rotate(0deg);
                    }
                }
                .float-left {
                    animation: floatLeft 8s ease-in-out infinite;
                }
                .float-right {
                    animation: floatRight 10s ease-in-out infinite;
                }
                .float-middle {
                    animation: floatMiddle 12s ease-in-out infinite;
                }
                .float-rightest {
                    animation: floatRightest 14s ease-in-out infinite;
                }
                
            `}</style>




        <div className="relative w-full h-[80vh]"> {/* Set a specific height */}
                <div className="absolute left-[5%] top-[20%] md:left-[10%] md:top-[15%] hidden md:block float-left">
                    <Image src="/BlendGroup1.svg" width={300} height={200} alt="Blend Group 1" />
                </div>
                <div className="absolute right-[10%] bottom-[20%] md:right-[25%] md:bottom-[15%] float-right">
                    <Image src="/BlendGroup2.svg" width={300} height={200} alt="Blend Group 2" />
                </div>
                <div className="absolute right-[30rem] bottom-[50%] md:right-[50%] md:bottom-[5%] float-middle">
                    <Image src="/BlendGroup3.svg" width={300} height={200} alt="Blend Group 3" />
                </div>
                <div className="absolute right-[20rem] bottom-[20%] md:right-[5%] md:bottom-[2%] float-rightest">
                    <Image src="/BlendGroup4.svg" width={300} height={200} alt="Blend Group 3" />
                </div>
            </div>

            <div className="absolute inset-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
                <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-[3rem] font-semibold text-white text-center">
                        We are best at <span className="text-yellow-300">{currentChar}</span>
                    </p>
                    <p className="text-[3rem] text-extra-color-one font-semibold max-w-[60rem] text-center">
                        Transforming your tunes into visual stories with our lyric videos   
                    </p>
                </div>
            </div>

        
    </div>
  )
}
