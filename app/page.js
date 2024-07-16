"use client"
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import Navbar from '@/components/Navbar'
import MainArticle from '@/components/MainArticle';
import Testimonials from '@/components/Testimonials';
import CountView from '@/components/CountView';
import Contact from '@/components/Contact';
import PriceArticle from '@/components/PriceArticle';
import Image from "next/image";


export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:px-[7rem] px-3 bg-gradient-to-br from-[#663dff] via-[#aa00ff] to-[#cc4499] min-h-screen w-full">
        <div className="max-w-7xl mx-auto">
            <Navbar onCtaClick={scrollToContact} />
        </div>
            <MainArticle />
            <Testimonials />
              <CountView  />
            <PriceArticle  onCtaClick={scrollToContact}/>
            <div ref={contactRef}>

               <Contact />
            </div>


    </div>
  )
}
