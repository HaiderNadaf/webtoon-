import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div
      className="w-full h-full  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-vector/shining-stars-night-sky_697972-1641.jpg')`,
      }}
    >
      {/* Main welcome section */}
      <div className="flex flex-col items-center justify-center h-1/3 ">
        <p className="text-xl sm:text-3xl md:text-5xl font-bold text-center mt-6 text-white ">
          Welcome to the Webtoon
        </p>
        <ReactTyped
          className="text-xl sm:text-3xl md:text-5xl font-bold md:pl-4 pl-2 text-white"
          strings={["world"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 sm:px-8 lg:px-16">
        {/* Card 1 */}
        <div className="rounded-lg shadow-lg bg-white bg-opacity-90 p-4">
          <h3 className="text-xl font-semibold mb-4">Hades</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjBl3WgiRNx0WIfGj0b2aeVvPnAfY_vtgrw&s"
            className="w-full h-96 object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
            alt="Hades"
          />
          <p className="mt-5">
            In the Lore Olympus webtoon, Hades, the God of the underworld, takes
            center stage. Often depicted as a handsome blue man in a business
            suit, Hades runs the Underworld Corporation, serves as the older
            brother of Zeus and Poseidon, and plays a role in the Six Traitor
            Dynasty. His character takes on the burden of leadership and
            pursuing personal interests.
          </p>
          <button className="w-full mt-4 py-2 bg-yellow-300 rounded-md text-gray-800 font-semibold">
            Read More About it
          </button>
        </div>

        {/* Card 2 */}
        <div className="rounded-lg shadow-lg bg-white bg-opacity-90 p-4">
          <h3 className="text-xl font-semibold mb-4">Zeus</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdvo93qmvaitH3CayKW1BVHtS_-uYbU-Yzg&s"
            className="w-full h-96 object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
            alt="Zeus"
          />
          <p className="mt-5">
            In the Lore Olympus webtoon, Hades, the God of the underworld, takes
            center stage. Often depicted as a handsome blue man in a business
            suit, Hades runs the Underworld Corporation, serves as the older
            brother of Zeus and Poseidon, and plays a role in the Six Traitor
            Dynasty. His character takes on the burden of leadership and
            pursuing personal interests.
          </p>
          <button className="w-full mt-4 py-2 bg-yellow-300 rounded-md text-gray-800 font-semibold">
            Read More About it
          </button>
        </div>

        {/* Card 3 */}
        <div className="rounded-lg shadow-lg bg-white bg-opacity-90 p-4">
          <h3 className="text-xl font-semibold mb-4">Persephone</h3>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK0hASnwZdQqMDlzGvl-4ZqB2RKLBpfQFWA&s"
            className="w-full h-96 object-cover rounded-md transform transition-transform duration-300 hover:scale-110"
            alt="Persephone"
          />
          <p className="mt-5">
            In the Lore Olympus webtoon, Hades, the God of the underworld, takes
            center stage. Often depicted as a handsome blue man in a business
            suit, Hades runs the Underworld Corporation, serves as the older
            brother of Zeus and Poseidon, and plays a role in the Six Traitor
            Dynasty. His character takes on the burden of leadership and
            pursuing personal interests.
          </p>
          <button className="w-full mt-4 py-2 bg-yellow-300 rounded-md text-gray-800 font-semibold">
            Read More About it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
