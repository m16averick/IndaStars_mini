import React, { useState, useEffect } from "react";
import cardsIcn from "./assets/cards.svg";
import deckIcn from "./assets/deck.svg";
import packIcn from "./assets/packs.svg";

import { ReactSVG } from "react-svg";
import { Link, useLocation } from "react-router-dom";

const BundleSelector = ({ active, setActive }) => {
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    //na razie niech tak bedzie
    <div className="bundleSelector">
      <div
        className={`bundleSelector__bundle bundle ${
          active == "Cards" ? "active" : "inactive"
        }`}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActive("Cards");
          }}
        >
          <ReactSVG src={cardsIcn} />
          <span>CARDS</span>
        </a>
      </div>
      <div
        className={`bundleSelector__bundle bundle ${
          active == "Packs" ? "active" : "inactive"
        }`}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActive("Packs");
          }}
        >
          <ReactSVG src={deckIcn} />
          <span>PACKS</span>
        </a>
      </div>
      <div
        className={`bundleSelector__bundle bundle ${
          active == "Deck" ? "active" : "inactive"
        }`}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActive("Deck");
          }}
        >
          <ReactSVG src={packIcn} />
          <span>YOUR DECK</span>
        </a>
      </div>
    </div>
  );
};

export { BundleSelector };
