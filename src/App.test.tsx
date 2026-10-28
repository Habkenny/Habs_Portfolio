
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("Portfolio application", () => {
  it("renders the application without crashing", () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  it("renders the main portfolio content", () => {
    render(<App />);
    expect(
      document.getElementById("hero-title")?.textContent,
    ).toMatch(/full-stack products/i);
  });
});
