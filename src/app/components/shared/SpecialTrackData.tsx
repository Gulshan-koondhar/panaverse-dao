import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

// const SpecialTrackData = [
//   {
//     title: "Specialized Track",
//     heading: "Artificial Intelligence (AI) and Deep Learning Specialization",
//     imgSrc: "",
//   },
//   {
//     title: "Specialized Track",
//     heading: "Cloud-Native Computing Specialization",
//     imgSrc: "",
//   },
//   {
//     title: "Specialized Track",
//     heading: "Ambient Computing and IoT Specialization",
//     imgSrc: "",
//   },
//   {
//     title: "Specialized Track",
//     heading: "Genomics and Bioinformatics Specialization",
//     imgSrc: "",
//   },
//   {
//     title: "Specialized Track",
//     heading: "Network Programmability and Automation Specialization",
//     imgSrc: "",
//   },
// ];
// export default SpecialTrackData;
import { FC } from "react";

const SpecialTrackData: FC<{
  heading: string;
  image: StaticImport;
}> = ({ heading, image }) => {
  return (
    <div>
      <div className="flex items-center flex-row-reverse mt-2 mb-4 gap-4">
        <div className="flex-1">
          <h4 className="text-sm font-bold text-teal-700 mb-2 mt-4">
            Specialized Track
          </h4>
          <h2 className="text-sm sm:text-xl font-bold overflow-y-hidden">
            {heading}
          </h2>
        </div>
        <div className="flex-1 max-w-40">
          <div className="ml-4">
            <Image
              src={image}
              alt="Blog Image"
              width={200}
              height={200}
              className="rounded-md "
            />
          </div>
        </div>
      </div>
      <hr className="ml-4" />
    </div>
  );
};

export default SpecialTrackData;
