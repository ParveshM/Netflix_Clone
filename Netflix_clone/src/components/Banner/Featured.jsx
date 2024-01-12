import Button from "./Button";
const Featured = ({ original_title, overview }) => {
  return (
    <div className="absolute lg:top-80 left-10 md:top-40 max-md:top-20 max-sm:top-20 flex flex-col text-white ">
      <h1 className="text-4xl font-bold text-white md:text-3xl max-md:text-2xl max-sm:text-lg">
        {original_title}
      </h1>
      <div className="flex gap-4 mt-3 ">
        <Button
          style={"bg-slate-200 text-black hover:bg-slate-300"}
          icon={<i className="fa-solid fa-play pr-2"></i>}
          text={"Play"}
        />
        <Button
          style={"bg-[#6d6d6db3] text-white hover:opacity-[.8]"}
          icon={<i className="fa-solid fa-circle-info pr-2"></i>}
          text={"Info"}
        />
      </div>
      <div className="w-96 max-h-36 overflow-hidden max-md:hidden ">
        <p className="my-5 text-base font-sans ">{overview}</p>
      </div>
    </div>
  );
};

export default Featured;
