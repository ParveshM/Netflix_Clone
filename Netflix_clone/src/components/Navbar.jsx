import { useState, useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    const scrollEvent = window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(scrollEvent, handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex justify-between items-center z-[999] fixed inset-x-0 h-12  bg-gradient-to-t
    from-transparent to-black ${
      scrolled ? "bg-black" : ""
    } transition duration-700 ease-in-out`}
    >
      <div className=" flex items-center">
        <div className="object-contain ml-5 w-24">
          <img
            className=""
            src="https://i.ibb.co/r5krrdz/logo.png"
            alt="logo"
          />
        </div>
        <ul className="flex text-white px-6 *:p-2 max-sm:hidden hover:*:text-slate-300">
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Account</li>
          <li>Mylist</li>
        </ul>
      </div>
      <ul className="flex text-white px-6 hover:*:text-slate-300 ">
        <li className="p-2">
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li className="p-2">
          <i className="fa-solid fa-bell"></i>
        </li>
        <li className="p-2">
          <img
            className="w-6 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="img"
          />
        </li>
        <li className="p-2">
          <i className="fa-solid fa-angle-down"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
