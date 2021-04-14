import React from "react";
import ReactDOM from "react-dom";
import ItunesSearch from "./index";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ItunesSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});

