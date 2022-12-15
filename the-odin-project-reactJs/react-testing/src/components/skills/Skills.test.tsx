import {render, screen, logRoles} from '@testing-library/react'
import Skills from './Skills'


describe("Skills", () => {

    const skills = ["HTML", "CSS", "JavaScript"]

    test("renders correctly", () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('Renders a list of skills', () => {
        render(<Skills skills={skills} />)
        const listItemElements = screen.getAllByRole("listitem")
        expect(listItemElements).toHaveLength(skills.length)
    })

    test('Renders Login button', () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument()
    })

    test('Start Learning button is not rendered', () => {
        render(<Skills skills={skills}/>)
        const startLearningButton = screen.queryByRole("button", {
            name: "Start Learning!"
        })
        expect(startLearningButton).not.toBeInTheDocument()
    })

    test("Start learning button is eventually displayed", async () => {
        const view = render(<Skills skills={skills} />)
        logRoles(view.container)

        const startLearningButton =  await screen.findByRole("button", {
            name: "Start Learning!"
        }, {
            timeout: 2000
        })
        expect(startLearningButton).toBeInTheDocument()
    })
})