import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";
import Square from "..";

describe("When rendering Square component", () => {
  it("should render the component without crashing", () => {
    shallow(<Square />);
  });
  it('should render button with label as "square button"', () => {
    const square = shallow(<Square value="square button" />);
    expect(square.text()).to.equal("square button");
  });
  it("should render button with onClick event", () => {
    const mockButtonClick = sinon.spy();
    const square = shallow(<Square onClick={mockButtonClick} />);
    square.simulate("click");
    expect(mockButtonClick).to.have.property("callCount", 1);
  });
});
