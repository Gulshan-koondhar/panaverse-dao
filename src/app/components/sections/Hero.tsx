import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-poster.png";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="flex-1 max-w-screen-sm">
          <h4 className="text-14 font-bold text-teal-700 mb-2 mt-4">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold overflow-y-hidden">
            Certified Web 3.0 and Metaverse Developer
          </h1>
          <p className="my-6 text-gray-700 ">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet <br />
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </p>
          <div>
            <Button text="Learn More" />
          </div>
        </div>
        <div className="flex-1">
          <Image src={HeroImage} alt="Hero Poster" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
