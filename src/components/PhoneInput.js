import React, { useState } from "react";

export const PhoneInput = () => {
  const [error, setError] = useState("");
  const [plusOneNumber, setPlusOneNumber] = useState("");
  const [reformattedNumber, setReformattedNumber] = useState("");

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
  };

  return (
    <div className={`inputContainer ${error ? "activeError" : ""}`}>
        <h3 className="inputContainer__Header">
            Please submit your phone number here and we'll get back to you promptly
        </h3>

        <form
            className="inputContainer__Form"
            onSubmit={e => {
                e.preventDefault();
                reset();
            }}
        >
            <div className="inputContainer__phoneDetails">
                <label className="inputContainer__label">Phone:</label>
                <input
                    disabled={error ? true : false}
                    type="string"
                    className="inputContainer__Input"
                    placeholder="Please add your phone number here - (xxx) xxx-xxxx"
                    value={reformattedNumber}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
            <p className="inputContainer__OutputField">
                <span>Value: {plusOneNumber}</span>
            </p>
            {error && (
                <>
                    <p className="inputContainer__errorMessage">{error}</p>
                </>
            )}
            <div className="inputContainer__btnContainer">
                <button type="submit" className="inputContainer__Btn --submit">
                    Submit
                </button>
                <button type="submit" className="inputContainer__Btn">
                    Reset
                </button>
            </div>
        </form>
    </div>
  );
};
