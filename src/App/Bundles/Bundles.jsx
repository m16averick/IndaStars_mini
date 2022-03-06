import React, { useState, useEffect } from "react";
import { BundleSelector } from "./BundleSelector";
import "./Bundles.scss";
import { Cards } from "./Sections/Cards";
import { Packs } from "./Sections/Packs";
import { Deck } from "./Sections/Deck";

const Bundles = ({ children }) => {
  const [active, setActive] = useState("Cards");
  return (
    <>
      <BundleSelector active={active} setActive={setActive} />
      {active === "Cards" && <Cards active={active} /> }
      {active === "Deck" && <Deck active={active} /> }
      {active === "Packs" && <Packs active={active} /> }
    </>
  );
};

export { Bundles };
