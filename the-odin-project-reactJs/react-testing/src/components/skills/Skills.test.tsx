import {render, screen} from '@testing-library/react'
import Skills from './Skills'


describe("Skills", () => {

    const skills = ["HTML", "CSS", "JavaScript"]

    test("renders correctly", () => {

        render(<Skills skills={skills}/>)

        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
        
    })
})