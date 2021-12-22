import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Widget", () => {
  it("should print header", () => {
    render(<App />);
    const headerElement = screen.getByRole("heading", {
      name: /per product widgets/i,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("should link to public profile checkbox starts checked and toggles on and off on click", () => {
    render(<App />);
    const checkboxElement = screen.getByRole("img", { name: /checkbox/i });
    expect(checkboxElement.src).toContain("ticked");
    fireEvent.click(checkboxElement);
    expect(checkboxElement.src).toContain("blank");
  });
});
