import { useEffect, useState } from "react";
import { Navbar, Featured } from "../index";
import axios from "axios";
import { BANNER_URL, BASEIMG_URL } from "../../constants/constant";
import { generateRandomIdx } from "../../utils/helper";

const Banner = () => {
  const [banner, setBanner] = useState("");
  useEffect(() => {
    axios
      .get(BANNER_URL)
      .then((res) => {
        const data = res?.data?.results;

        setBanner(data[generateRandomIdx(data.length)]);
      })
      .catch((err) => console.log("Error in api fetching :", err));
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <img
        className="max-w-full object-cover"
        src={BASEIMG_URL + banner?.backdrop_path}
        alt="Movie poster"
      />
      <Featured {...banner} />
    </div>
  );
};

export default Banner;
