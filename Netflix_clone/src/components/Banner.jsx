import { Navbar } from "./index";
const Banner = () => {
  return (
    <div className="">
      <Navbar />
      <img
        className="max-w-full object-cover"
        src="https://orangecubeproject.com/wp-content/uploads/2021/01/210109_HORIZONTAL_NAMES.jpg"
        alt="Movie poster"
      />
    </div>
  );
};

export default Banner;
