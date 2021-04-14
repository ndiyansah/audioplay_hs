import React from "react";
import ReactDOM from "react-dom";
import Icon from "./index";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Icon />, div);
  ReactDOM.unmountComponentAtNode(div);
});

