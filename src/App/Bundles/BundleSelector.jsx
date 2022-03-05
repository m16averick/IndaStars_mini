import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BundleSelector = ({ children }) => {
  return (
    //na razie niech tak bedzie
    <div className="bundleSelector">
      <div className="bundleSelector__bundle bundle">
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img src="" />
          <span>CARDS</span>
        </a>
      </div>
      <div className="bundleSelector__bundle bundle">
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img src="" />
          <span>PACKS</span>
        </a>
      </div>
      <div className="bundleSelector__bundle bundle">
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img src="" />
          <span>YOUR DECK</span>
        </a>
      </div>
    </div>
  );
};

export { BundleSelector };
