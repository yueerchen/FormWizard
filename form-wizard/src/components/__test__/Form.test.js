import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import FormView from "../FormView";

afterEach(cleanup);

const setup = () => {
  const utils = render(<FormView />);
  const fname = utils.getByTestId("fname");
  const lname = utils.getByTestId("lname");
  const email = utils.getByTestId("email");
  const phone = utils.getByTestId("phone");
  return {
    fname,
    lname,
    email,
    phone,
    ...utils
  };
};

test("render form without crashing", () => {
  render(<FormView />);
  const stepOne = screen.getByTestId("step-one");

  expect(stepOne).toBeInTheDocument();
  expect(stepOne).toHaveTextContent("1");
});

test("should have first step input value set", () => {
  let { fname, lname, email, phone } = setup();

  fireEvent.change(fname, { target: { value: "yueer" } });
  expect(fname.value).toBe("yueer");

  fireEvent.change(lname, { target: { value: "chen" } });
  expect(lname.value).toBe("chen");

  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });
  expect(email.value).toBe("yueer.chen0318@gmail.com");

  fireEvent.change(phone, { target: { value: "0468377625" } });
  expect(phone.value).toBe("0468377625");
});

test("first name is required", () => {
  const { lname, email, phone } = setup("fname");

  fireEvent.change(lname, { target: { value: "chen" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });

  fireEvent.click(screen.getByTestId("continue-first"));
  const errorMessage = screen.getByTestId("details-error");
  expect(errorMessage).toHaveTextContent(
    "Please fulfill all the required sections(*)"
  );
});

test("last name is required", () => {
  let { fname, email, phone } = setup();

  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });

  fireEvent.click(screen.getByTestId("continue-first"));
  const errorMessage = screen.getByTestId("details-error");
  expect(errorMessage).toHaveTextContent(
    "Please fulfill all the required sections(*)"
  );
});

test("email is required", () => {
  let { fname, lname, phone } = setup();

  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(lname, { target: { value: "chen" } });

  fireEvent.click(screen.getByTestId("continue-first"));
  const errorMessage = screen.getByTestId("details-error");
  expect(errorMessage).toHaveTextContent(
    "Please fulfill all the required sections(*)"
  );
});

test("should be correct email format", () => {
  let { fname, lname, email, phone } = setup();

  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(lname, { target: { value: "chen" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail" } });

  fireEvent.click(screen.getByTestId("continue-first"));
  const errorMessage = screen.getByTestId("details-error");
  expect(errorMessage).toHaveTextContent("Input email address is invalid");
});

test("should be correct phone format", () => {
  let { fname, lname, email, phone } = setup();

  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(lname, { target: { value: "chen" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });
  fireEvent.change(phone, { target: { value: "8t77625" } });

  fireEvent.click(screen.getByTestId("continue-first"));
  const errorMessage = screen.getByTestId("details-error");
  expect(errorMessage).toHaveTextContent("Input phone number is invalid");
});

test("should process step two", () => {
  let { fname, lname, email, phone } = setup();

  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(lname, { target: { value: "chen" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });
  fireEvent.change(phone, { target: { value: "0468377625" } });

  fireEvent.click(screen.getByTestId("continue-first"));
  const stepTwo = screen.getByTestId("step-two");

  expect(stepTwo).toBeInTheDocument();
  expect(stepTwo).toHaveTextContent("2");
});

const setupStepTwo = () => {
  const stNumber = screen.getByTestId("stNumber");
  const stName = screen.getByTestId("stName");
  const stType = screen.getByTestId("stType");
  const suburb = screen.getByTestId("suburb");
  const postcode = screen.getByTestId("postcode");
  return {
    stNumber,
    stName,
    stType,
    suburb,
    postcode
  };
};

test("should process step two", () => {
  let { fname, lname, email, phone } = setup();

  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(lname, { target: { value: "chen" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });
  fireEvent.change(phone, { target: { value: "0468377625" } });

  fireEvent.click(screen.getByTestId("continue-first"));
  const stepTwo = screen.getByTestId("step-two");

  expect(stepTwo).toBeInTheDocument();
  expect(stepTwo).toHaveTextContent("2");
});

test("should have second step input value set", () => {
  let { fname, lname, email, phone } = setup();
  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(lname, { target: { value: "chen" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });
  fireEvent.change(phone, { target: { value: "0468377625" } });
  fireEvent.click(screen.getByTestId("continue-first"));

  let { stNumber, stName, stType, suburb, postcode } = setupStepTwo();
  fireEvent.change(stNumber, { target: { value: "12" } });
  expect(stNumber.value).toBe("12");

  fireEvent.change(stName, { target: { value: "high" } });
  expect(stName.value).toBe("high");

  fireEvent.change(stType, { target: { value: "St" } });
  expect(stType.value).toBe("St");

  fireEvent.change(suburb, { target: { value: "Toowong" } });
  expect(suburb.value).toBe("Toowong");

  fireEvent.change(postcode, { target: { value: "4066" } });
  expect(postcode.value).toBe("4066");
});

test("should be correct postcode format", () => {
  let { fname, lname, email, phone } = setup();
  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(lname, { target: { value: "chen" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });
  fireEvent.change(phone, { target: { value: "0468377625" } });
  fireEvent.click(screen.getByTestId("continue-first"));

  let { stNumber, stName, stType, suburb, postcode } = setupStepTwo();
  fireEvent.change(stNumber, { target: { value: "12" } });
  fireEvent.change(stName, { target: { value: "high" } });
  fireEvent.change(stType, { target: { value: "St" } });
  fireEvent.change(suburb, { target: { value: "Toowong" } });
  fireEvent.change(postcode, { target: { value: "0790" } });

  fireEvent.click(screen.getByTestId("continue-second"));
  const errorMessage = screen.getByTestId("details-error-second");
  expect(errorMessage).toHaveTextContent(
    "Input postcode is invalid, please enter code in range 0800-7999"
  );
});

test("should be correct street number format", () => {
  let { fname, lname, email, phone } = setup();
  fireEvent.change(fname, { target: { value: "yueer" } });
  fireEvent.change(lname, { target: { value: "chen" } });
  fireEvent.change(email, { target: { value: "yueer.chen0318@gmail.com" } });
  fireEvent.change(phone, { target: { value: "0468377625" } });
  fireEvent.click(screen.getByTestId("continue-first"));

  let { stNumber, stName, stType, suburb, postcode } = setupStepTwo();
  fireEvent.change(stNumber, { target: { value: "12.2" } });
  fireEvent.change(stName, { target: { value: "high" } });
  fireEvent.change(stType, { target: { value: "St" } });
  fireEvent.change(suburb, { target: { value: "Toowong" } });
  fireEvent.change(postcode, { target: { value: "4600" } });

  fireEvent.click(screen.getByTestId("continue-second"));
  const errorMessage = screen.getByTestId("details-error-second");
  expect(errorMessage).toHaveTextContent("Input street number is invalid");
});
