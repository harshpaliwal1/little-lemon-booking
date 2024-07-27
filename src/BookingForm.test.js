// src/BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders booking form", () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText(/name/i);
  expect(nameInput).toBeInTheDocument();
});

test("submits form with valid data", () => {
  render(<BookingForm />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const phoneInput = screen.getByLabelText(/phone/i);
  const dateInput = screen.getByLabelText(/date/i);
  const timeInput = screen.getByLabelText(/time/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const form = screen.getByRole("form");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(phoneInput, { target: { value: "1234567890" } });
  fireEvent.change(dateInput, { target: { value: "2024-08-01" } });
  fireEvent.change(timeInput, { target: { value: "18:00" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });

  fireEvent.submit(form);

  expect(screen.getByText(/table booked successfully/i)).toBeInTheDocument();
});
