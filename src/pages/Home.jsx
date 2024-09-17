import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="max-w-4xl text-center p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold text-white mb-6 tracking-wide">
          Welcome to Your New Favorite Place
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Step into a world where convenience meets excellence. Whether you're
          here to shop, learn, or be inspired, you've come to the right place.
          Our platform is designed with you in mind—offering a seamless
          experience from start to finish.
        </p>
        <button className="transition ease-in-out duration-300 transform hover:scale-105 px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white font-semibold rounded-full shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
