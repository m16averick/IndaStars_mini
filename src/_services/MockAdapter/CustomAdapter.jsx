import { useEffect } from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import cards from "./cards.json";

const CustomAdapter = () => {
  useEffect(() => {
    var mock = new MockAdapter(axios);
    mock.onGet("/api/user/123/cards").reply(200, cards);
    mock.onPost("/api/cards/").reply(200);
  }, []);

  return <></>;
};

export default CustomAdapter;
