import Wrapper from "../shared/Wrapper";
import OutcomeLogo from "../../../../public/outcome-poster.webp";
import Image from "next/image";
import BackgroundDiv from "../shared/BackgroundDiv";

const Outcome = () => {
  const outcomeData = [
    "Product Ownership",
    "Freelacing",
    "Global Marketing by Panaverse DAO",
    "Boosting Economy",
  ];
  return (
    <section className="my-10">
      <Wrapper>
        <div className="flex flex-col-reverse gap-8 sm:flex-row items-center">
          <div className="flex-1 flex justify-center ">
            <Image src={OutcomeLogo} alt="Outcome Poster" />
          </div>
          <div className="flex-1">
            <div>
              <BackgroundDiv />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold overflow-y-hidden">
              The Outcome for Participants of the Program
            </h1>
            <p className="my-4 text-gray-700 ">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistans software exports.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {outcomeData.map((item) => (
                <div key={item[0]} className="font-medium text-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Outcome;
