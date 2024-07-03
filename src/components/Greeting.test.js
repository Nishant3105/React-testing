import { screen, render } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />)

        //Act
        //...nothing

        //Assert
        const paragraphElement = screen.getByText(/Hello World/i, { exact: false })
        expect(paragraphElement).toBeInTheDocument()
    })
    test('renders "Changed! if the button was clicked', () => {
        //Arrange
        render(<Greeting />)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument()
    })

    test('dos not render "good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting />)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.queryByText('Changed!')
        expect(outputElement).toBeNull()
    })
})