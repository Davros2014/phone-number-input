import React, { useState } from "react";
import talonLogo from "../img/T1logo.svg";

export const PhoneInput = () => {
  const [error, setError] = useState("");
  const [plusOneNumber, setPlusOneNumber] = useState("");
  const [reformattedNumber, setReformattedNumber] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleChange = number => {
    console.log("number", number);
    let digitsOnlyNumber = number.replace(/\D/g, "");
    let usNumber = "";
    if (digitsOnlyNumber) {
      usNumber = "+1 " + digitsOnlyNumber;
    }

    let inputLength = digitsOnlyNumber.length;

    let usFormattedNumber = "";

    if (inputLength < 4) {
      usFormattedNumber = digitsOnlyNumber;
    } else if (inputLength < 7) {
      usFormattedNumber = `(${digitsOnlyNumber.slice(
        0,
        3
      )}) ${digitsOnlyNumber.slice(3, 6)}`;
    } else if (inputLength <= 10) {
      usFormattedNumber = `(${digitsOnlyNumber.slice(
        0,
        3
      )}) ${digitsOnlyNumber.slice(3, 6)} - ${digitsOnlyNumber.slice(6, 11)}`;
    }
    console.log("inputLength", inputLength);
    validateLength(digitsOnlyNumber);
    setReformattedNumber(usFormattedNumber);
    setPlusOneNumber(usNumber);
  };
  const validateLength = num => {
    num.length > 10
      ? setError(
          "Sorry, your number is invalid, please enter a valid US number"
        )
      : setError("");
  };

  const reset = () => {
    setError("");
    setPlusOneNumber("");
    setReformattedNumber("");
    setSubmit(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(!submit);
    console.log("form submitted");
  };

  // onSubmit={e => {
  //     e.preventDefault();
  //     reset();
  // }}

  return (
    <>
        {submit ? (
            <div className={`inputContainer  ${submit ? "submitModal" : ""}`}>
                <h1 className="inputContainer__Header --submitMessage">
                    Thank you for your interest in Talon.One, a representative will be
                    in touch will you shortly.
                </h1>

          <div className="inputContainer__logoContainer">
            <img
              className="inputContainer__logo"
              src={talonLogo}
              alt="talonlogo"
            />
            <button
              type="button"
              className="inputContainer__Btn --return"
              onClick={() => reset()}
            >
              Return
            </button>
            <div className="triangle-topleft"></div>
            <div className="triangle-bottomright"></div>
            <div className="triangle-bottomleft"></div>
          </div>
        </div>
      ) : (
        <div className={`inputContainer  ${error ? "activeError" : ""}`}>
          <h3 className="inputContainer__Header">
            Please submit your phone number here and we'll get back to you as
            soon as possible
          </h3>

          <form className="inputContainer__Form" onSubmit={handleSubmit}>
            <div className="inputContainer__phoneDetails">
              <label className="inputContainer__label">Phone:</label>
              <input
                disabled={error ? true : false}
                type="string"
                className="inputContainer__Input"
                placeholder={
                  error
                    ? "Incorrect entry - try again"
                    : "Please add your phone number here"
                }
                value={reformattedNumber}
                onChange={e => handleChange(e.target.value)}
              />
            </div>
            <p className="inputContainer__OutputField">
              Value:<span>{plusOneNumber}</span>
            </p>
            {error && (
              <>
                <p className="inputContainer__errorMessage">{error}</p>
              </>
            )}
            {submit && (
              <>
                <p className="inputContainer__errorMessage inputContainer__submitMessage">
                  Thank you for your interest in Talon.One, a representative
                  will be in touch will you shortly.
                </p>
                <img
                  className="inputContainer__logo"
                  src="./img/T1_logo.svg"
                  alt="talonlogo"
                />
              </>
            )}
            <div className="inputContainer__btnContainer">
              <button
                type="submit"
                className="inputContainer__Btn --submit"
                disabled={reformattedNumber.length < 11 ? true : false}
              >
                Submit
              </button>
              <button
                type="button"
                className="inputContainer__Btn --reset"
                onClick={() => reset()}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
