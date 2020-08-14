import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

const setup = (field) => {
  const utils = render(<App />)
  const input = utils.getByTestId(field)
  return {
    input,
    ...utils,
  }
}


test("renders App without crashing", () => {
  render(<App />);
})

test("renders form elements", ()=> {
  const { getByText } = render(<App />);
  expect("form").toBeVisible;
  getByText(/first name/i)
  getByText(/last name/i)
  getByText(/email/i)
  getByText(/message/i)
});

test("submit button", ()=>{
  const { getByTestId } = render(<App />);
  const button = getByTestId("button")
  expect("button").toBeVisible;

});

test("firstname works", ()=>{
  const { input } = setup('firstName')
  fireEvent.change(input, { target: { name: 'Eddy' } })
  expect(input.name).toBe('Eddy')
  // const error1 = getByTestId("error")
  // expect("error1").toBeVisible;

})

test("lastname works", ()=>{
  const { input } = setup('lastName')
  fireEvent.change(input, { target: { name: 'Burke' } })
  expect(input.name).toBe('Burke')
})

test("email works", ()=>{
  const { input } = setup('email')
  fireEvent.change(input, { target: { name: 'jgralews3@yahoo.com' } })
  expect(input.name).toBe('jgralews3@yahoo.com')
})