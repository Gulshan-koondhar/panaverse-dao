import SpecialTrack from "../layout/SpecialTrack";
import Wrapper from "../shared/Wrapper";

const SpecialTracks = () => {
  return (
    <section>
      <Wrapper>
        <div className="mt-8 max-w-screen-sm">
          <h1 className="whitespace-pre-line text-3xl sm:text-4xl font-bold overflow-y-hidden">
            Specialized Tracks:
          </h1>
          <p className="my-4 text-gray-700 ">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>
        <SpecialTrack />
      </Wrapper>
    </section>
  );
};

export default SpecialTracks;
