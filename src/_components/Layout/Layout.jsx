import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="nft-sections segment" id="nft-sections">
        <div className="nft-sections--content content">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export { Layout };
