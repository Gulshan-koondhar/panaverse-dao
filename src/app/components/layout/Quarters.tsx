import { FC } from "react";

const Quarters: FC<{ Quarter: string; Detail: string; background: number }> = ({
  Quarter,
  Detail,
  background,
}) => {
  return (
    <div className="border p-4 rounded-md relative w-full sm:w-4/8 overflow-y-hidden">
      <h1 className="font-bold text-lg">{Quarter}</h1>
      <p className="mt-2 text-slate-600 ">{Detail}</p>
      <span className="absolute top-0 right-10 -z-10 font-bold text-6xl sm:text-9xl text-gray-200 overflow-y-hidden">
        {background}
      </span>
    </div>
  );
};

export default Quarters;
