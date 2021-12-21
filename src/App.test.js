import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Widget", () => {
  it("prints header", () => {
    render(<App />);
    const headerElement = screen.getByRole("heading", {
      name: /per product widgets/i,
    });
    expect(headerElement).toBeInTheDocument();
  });

  it("Link to public profile checkbox ticks & changes state", () => {
    render(<App />);
    const checkboxElement = screen.getByRole("img", { name: /checkbox/i });
    expect(checkboxElement.src).toContain("ticked");
    fireEvent.click(checkboxElement);
    expect(checkboxElement.src).toContain("blank");
  });
});
