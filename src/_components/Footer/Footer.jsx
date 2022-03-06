import "./Footer.scss";
import holo1 from "./assets/holo1.png";
import holo2 from "./assets/holo2.png";
import v1 from "./assets/v1.svg";
import v2 from "./assets/v2.svg";
import v3 from "./assets/v3.svg";
import v4 from "./assets/v4.svg";
import v5 from "./assets/v5.svg";
import v6 from "./assets/v6.svg";

import { ReactSVG } from "react-svg";

const Footer = () => {
  return (
    <footer id="nft-footer" className="nft-footer segment">
      <div className="nft-footer__content content">
        <div className="row">
          <div className="col-l">
            <img className="hologram hologram1" src={holo1} />
            <img className="hologram hologram2" src={holo2} />
            <div className="contractors">
              <div className="contractor">© 2021 indaStars</div>
              <div className="contractor">
                © 2021 IDH Media Limited. All rights reserved.
              </div>
            </div>
          </div>
          <div className="col-r">
            <div className="row1">
              <a href="#">Newsletter</a>
              <a href="#">Terms & conditions</a>
              <a href="#">FAQ</a>
              <a href="#">Help</a>
            </div>
            <div className="row2">
              <span className="icon">
                <ReactSVG src={v1} />
              </span>
              <span className="icon">
                <ReactSVG src={v2} />
              </span>
              <span className="icon">
                <ReactSVG src={v3} />
              </span>
              <span className="icon">
                <ReactSVG src={v4} />
              </span>
              <span className="icon">
                <ReactSVG src={v5} />
              </span>
              <span className="icon">
                <ReactSVG src={v6} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
