import { render, screen } from "@testing-library/react";
import  Application  from "./Application";

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />)
        const testElement = screen.getByRole("textbox")
        expect(testElement).toBeInTheDocument()

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument()

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument()

        const submtButtonElement = screen.getByRole("button")
        expect(submtButtonElement).toBeInTheDocument()
    });

    
})