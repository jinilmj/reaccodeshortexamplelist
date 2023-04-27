//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1> My favourite Ipl Team</h1>
    <img src={img + "?grayscale"} />
    <List />
  </div>,
  document.getElementById("root")
);
