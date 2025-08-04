import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Mainpage = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-white/80">
      <Navbar />
      <main className="grow  lg:mt-15">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Mainpage;
