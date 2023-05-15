import React, { useState, useEffect } from 'react';
import herosection1 from '../assets/herosection1.svg'
import herosection2 from '../assets/herosection2.svg'
import herosection3 from '../assets/herosection3.svg'
import herosection4 from '../assets/herosection4.svg'


const HeroSection = () => {
    const [heroSectionx, setHeroSectionx] = useState([herosection1, herosection2, herosection3, herosection4 ])
    const [heroSectionxrandom, setHeroSectionxrandom] = useState(heroSectionx[3])
    useEffect(() => {
        const interval = setInterval(() => setHeroSectionxrandom(heroSectionx[Math.floor(Math.random() * heroSectionx.length)]), 2500);
        console.log(interval);
        return () => {
          clearInterval(interval);
        };
      }, []);


  return (
    <div className='heroSection'>
        <div className="front">
            Front-end 
        </div>
        <div className="developer">
            Developer
        </div>
        <div className="heroSection__image">
            <img src={
                heroSectionxrandom
            } className='heroImg' alt="hero section 1" 
            />
        </div>
    </div>
  )
}

export default HeroSection