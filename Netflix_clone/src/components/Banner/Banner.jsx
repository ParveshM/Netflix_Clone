import { useEffect, useState } from "react";
import { Navbar, Featured } from "../index";
import axios from "axios";
import { BANNER_URL, BASEIMG_URL } from "../../constants/constant";
import { generateRandomIdx } from "../../utils/helper";

const Banner = () => {
  const [banner, setBanner] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(BANNER_URL)
      .then((res) => {
        const data = res?.data?.results;

        setBanner(data[generateRandomIdx(data.length)]);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error in api fetching :", err));
  }, []);

  return (
    <div className="relative mb-5 lg:h-screen lg:mb-28">
      <Navbar />
      {isLoading ? (
        <div className="bg-gray-600 w-full h-52 sm:h-96 lg:h-screen"></div>
      ) : (
        <>
          <img
            className="max-w-full object-cover"
            src={BASEIMG_URL + banner?.backdrop_path}
            alt="Movie poster"
          />
          <Featured {...banner} />
        </>
      )}
    </div>
  );
};

export default Banner;
