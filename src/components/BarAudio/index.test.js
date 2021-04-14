import React from "react";
import ReactDOM from "react-dom";
import BarAudio from "./index";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BarAudio />, div);
  ReactDOM.unmountComponentAtNode(div);
});

