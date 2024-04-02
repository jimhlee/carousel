import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

 const TEST_IMAGE =   {
    src: "test1.com",
    caption: "testing image 1"
  }


it('renders without crashing', function() {
    render(<Card
        caption="testing image 1"
        src="test1.com"
        currNum="1"
        totalNum="2"
        />
    );
})

it('matches snapshot', function() {
    const { container } = render(
        <Card
        caption="testing image 1"
        src="test1.com"
        currNum="1"
        totalNum="2"
        />
      );
    expect(container).toMatchSnapshot();
})