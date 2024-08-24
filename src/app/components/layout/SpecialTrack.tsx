import React from "react";
import SpecialTrackData from "../shared/SpecialTrackData";
import Image from "next/image";
import Quarters from "./Quarters";
import Wrapper from "../shared/Wrapper";
import image1 from "../../../../public/Image1.webp";
import image2 from "../../../../public/image2.png";
import image3 from "../../../../public/image3.png";
import image4 from "../../../../public/image4.webp";
import image5 from "../../../../public/image5.png";
import image6 from "../../../../public/images1.png";
const SpecialTrack = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1 max-w-screen-md border-2 mb-3 rounded-md md:h-[680px] lg:h-[480px] ">
        <Wrapper>
          <h4 className="text-14 font-bold text-teal-700 mb-2 mt-4">
            Specialized Track
          </h4>
          <h1 className="whitespace-pre-line text-2xl sm:text-4xl font-bold overflow-y-hidden">
            Web 3.0 (Blockchain) and Metaverse Specialization
          </h1>
          <p className="my-4 text-gray-700 ">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </p>
          <button className="p-2 border-2 border-green-700 text-green-800 rounded-md mb-4 font-bold">
            Learn More
          </button>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Quarters
              Quarter="Quarter IV"
              Detail="NPA-351: CCNA 200-301 Certification"
              background={4}
            />
            <Quarters
              Quarter="Quarter V"
              Detail="NPA-361: Network Programmability and Automation"
              background={5}
            />
          </div>
        </Wrapper>
      </div>
      <div className="flex-1 h-[680px]">
        <SpecialTrackData
          heading="Web 3.0 (Blockchain) and Metaverse Specialization"
          image={image1}
        />
        <SpecialTrackData
          heading="Artificial Intelligence (AI) and Deep Learning Specialization"
          image={image2}
        />
        <SpecialTrackData
          heading="Cloud-Native Computing Specialization"
          image={image3}
        />
        <SpecialTrackData
          heading="Ambient Computing and IoT Specialization"
          image={image4}
        />
        <SpecialTrackData
          heading="Genomics and Bioinformatics Specialization"
          image={image5}
        />
        <SpecialTrackData
          heading="Network Programmability and Automation Specialization"
          image={image6}
        />
      </div>
    </div>
  );
};

export default SpecialTrack;
