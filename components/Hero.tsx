"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

function Hero() {

  const handleScroll = () => {  
    // Do something
  }

  return (
	<div className="hero">  
    <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">
        Find, book, or rent a car - quickly and easilt!
      </h1>

      <p className="hero__subtitle">
        Streamline your car rental experience with our effortless booking process.
      </p>
      <CustomButton
        title="Expplore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      />
    </div>
    <div className="hero__image-container">
      <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className="object-contain"/>
        <div className="hero__image-overlay"></div> 
      </div>
    </div>

  </div>
  )
}

export default Hero
