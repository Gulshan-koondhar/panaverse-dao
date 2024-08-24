import Quarters from "../layout/Quarters";
import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import CoreTracksData from "../shared/CoreTracksData";
import BackgroundDiv from "../shared/BackgroundDiv";

const CodeTracks = () => {
  const mainHeading = "Core Courses \n (Common in All Specializations)";
  return (
    <section>
      <Wrapper>
        <div className="-inset-8 top-[750px] sm:top-[600px]">
          <BackgroundDiv />
        </div>
        <div className="mt-8 max-w-screen-sm">
          <h4 className="text-14 font-bold text-teal-700 mb-2 mt-4">
            Program of Studies
          </h4>
          <h1 className="whitespace-pre-line text-3xl sm:text-4xl font-bold overflow-y-hidden">
            {mainHeading}
          </h1>
          <p className="my-4 text-gray-700 ">
            Every participant of the program will start by completing the
            following three core courses.
          </p>
          <div>
            <Button text="Enroll Now" />
          </div>
        </div>
        <div className="my-10 flex flex-col sm:flex-row gap-8">
          {CoreTracksData.map((item, i) => (
            <div
              className="border p-4 rounded-md relative w-full sm:w-4/12  "
              key={item.header}
            >
              <h1 className="font-bold text-lg" key={item.header}>
                {item.header}
              </h1>
              <p className="mt-2 text-slate-600 " key={item.desc}>
                {item.desc}
              </p>
              <span
                className="absolute top-5 right-10 -z-10 font-bold text-8xl sm:text-9xl text-gray-200 overflow-y-hidden"
                key={item.background}
              >
                {item.background}
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CodeTracks;
