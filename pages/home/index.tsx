"use client";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="text-4xl text-purple-900">
        Welcome to Book Inventory Management
      </div>
      <div className="text-md text-gray-600 mt-4">
        Manage your library efficiently and stay updated with real-time
        inventory details.
      </div>
      <div className="text-xl text-purple-900 mt-12"> Features Overview</div>
      <div className="mt-4 text-md text-gray-900">
        <span className="font-semibold me-4"> Track Stock: </span> Keep a close
        eye on books that are in stock and out of stock.
      </div>
      <div className="mt-4 text-md text-gray-900">
        <span className="font-semibold me-4"> Categorized Inventory: </span>{" "}
        Organize your books by genre, author, or publisher.
      </div>
      <div className="mt-4 text-md text-gray-900">
        <span className="font-semibold me-4"> Search & Filter: </span> Quickly
        find the books you need with advanced search and filter options.
      </div>
      <div className="my-16 flex justify-center">
        <img
          src={"/images/home.png"}
          style={{
            width: "40%",
            height: "40vh",
            objectFit: "cover",
          }}
          alt="Home"
        />
      </div>
      <div className="text-purple-900 text-xl text-center">
        Start managing your books smarter today!
      </div>
    </div>
  );
};
export default Home;
