import { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "./assets/logo.svg";
import AnimateHeight from "react-animate-height";

const Navbar = () => {
  const [height, setHeight] = useState(60);

  const controlNavbar = () => {
    if (window.scrollY > 60) setHeight(40);
    else setHeight(60);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav id="nft-navbar" className="nft-navbar segment">
      <div className="nft-navbar__content content">
        <AnimateHeight
          id="siteLogo"
          className="siteLogo"
          duration={200}
          height={height}
          style={{ backgroundImage: `url(${logo})` }}
        >
          <></>
        </AnimateHeight>
      </div>
    </nav>
  );
};

export { Navbar };
