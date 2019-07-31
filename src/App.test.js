import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/react/cleanup-after-each";

afterEach(cleanup);

const TestComponent = () => <div>hello</div>;

test("react-testing-library test", () => {
  const { getByText } = render(<TestComponent />);
  const hello = getByText("hello");
});
