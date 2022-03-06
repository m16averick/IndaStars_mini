import React from "react";
import "./card.scss";
import cardBgIcn from "./assets/card-gradient-bg.png";
import indaStarIcn from "./assets/indastar.png";
import starIcn from "./assets/star.svg";
import fireIcn from "./assets/fire.svg";
import burgerIcn from "./assets/burger.png";

const Card = (props) => {
  return (
    <div className="card-holder">
      <div className="card-wrap"><img src={burgerIcn} /></div>
        <div className="card" style={{ background: `url(${cardBgIcn})` }}>
          <div className="card-header header">
            <img src={indaStarIcn} className="card-header__star star" />
            <div className="card-header__amount amount">{props.amount}</div>
          </div>
          <img src={props.imgUrl} className="card-img" alt={props.title} />
          <div className="card-body">
            <h5 className="card-body__title title">{props.title}</h5>
            <p className="card-body__text text">{props.subtitle}</p>
            <div className="card-body__details details">
              <div className="power">
                <div className="imgWrap">
                  <img src={fireIcn} />
                </div>
                <span className="power-amount">{props.power}</span>
              </div>
              <div className="stars">
                <div className="imgWrap">
                  <img src={starIcn} />
                </div>
                <span className="stars-amount">{props.stars}</span>
              </div>
            </div>
            <hr />
            <div className="card-body__footer">
              Powered by{" "}
              <a href="#" className="iName">
                {props.iName}
              </a>
            </div>
          </div>
        </div>

    </div>
  );
};

export { Card };
