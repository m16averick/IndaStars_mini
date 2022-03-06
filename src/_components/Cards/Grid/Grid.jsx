import React from "react";

const Grid = ( props ) => {
  return (
    <>
      <div className="cardGrid" style={{marginTop: "50px"}}>
        {props.children}
      </div>
    </>
  );
};

export { Grid };
