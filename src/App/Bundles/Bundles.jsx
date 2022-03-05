import React, { useState, useEffect } from "react";
import { BundleSelector } from "./BundleSelector";
import "./Bundles.scss";

const Bundles = ({ children }) => {
  return (
    <>
        <BundleSelector/>
    </>
  );
};

export { Bundles };
