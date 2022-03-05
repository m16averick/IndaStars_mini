import React, { useState, useEffect } from "react";
import { BundleSelector } from "./BundleSelector";
import "./Bundles.scss";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} className="card-img-top" alt={props.title} />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export { Card };
