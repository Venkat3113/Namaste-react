import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case ", () => {

test("Should render heading in contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

it("Should render the submit button", () => {
    render(<Contact />);
    const submit = screen.getByText(/submit/i);
    expect(submit).toBeInTheDocument();
});

test("Should render name input with placeholder", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("name");
    expect(nameInput).toBeInTheDocument();
});

it("Should load 2 textboxes", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
});


});

