import React, { useState, useEffect } from "react";
import { Card } from "../../../_components/Cards/Card/Card";
import { Grid } from "../../../_components/Cards/Grid/Grid";

import thumb1 from "../assets/thumb1.png";

const Cards = ({ children }) => {
  return (
    <>
      <Grid>
        <Card
          amount="02 / 52"
          imgUrl={thumb1}
          title="Summer 🏖🍹 Vibes!"
          subtitle="summer Influ Pack 🌞"
          power={98}
          stars={"28 100"}
          iName="influencer_nickname"
        />
        <Card
          amount="02 / 52"
          imgUrl={thumb1}
          title="Summer 🏖🍹 Vibes!"
          subtitle="summer Influ Pack 🌞"
          power={98}
          stars={"28 100"}
          iName="influencer_nickname"
        />
        <Card
          amount="02 / 52"
          imgUrl={thumb1}
          title="Summer 🏖🍹 Vibes!"
          subtitle="summer Influ Pack 🌞"
          power={98}
          stars={"28 100"}
          iName="influencer_nickname"
        />
        <Card
          amount="02 / 52"
          imgUrl={thumb1}
          title="Summer 🏖🍹 Vibes!"
          subtitle="summer Influ Pack 🌞"
          power={98}
          stars={"28 100"}
          iName="influencer_nickname"
        />
        <Card
          amount="02 / 52"
          imgUrl={thumb1}
          title="Summer 🏖🍹 Vibes!"
          subtitle="summer Influ Pack 🌞"
          power={98}
          stars={"28 100"}
          iName="influencer_nickname"
        />
      </Grid>
    </>
  );
};

export { Cards };
