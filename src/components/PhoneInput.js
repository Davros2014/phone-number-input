import React, { useState } from "react";

export const PhoneInput = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [plusOneNumber, setPlusOneNumber] = useState("");

  const handleChange = number => {
    console.log("e", number);
    let digitsOnlyNumber = ("" + number).replace(/\D/g, "");
    let usNumber = "+1" + digitsOnlyNumber;

    validate(usNumber);
    setNumber(number);
  };
  const validate = usNumber => {
    usNumber.length > 10
      ? setError(
          "Sorry, your number is invalid, please enter a valid US number"
        )
      : setError("");
  };
  const reset = () => {
    setNumber("");
    setPlusOneNumber("");
  };

  return (
    <div className="inputContainer">
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
          <input
            type="string"
            className="inputContainer__Input"
            placeholder="Please add your phone number here - (xxx) xxx-xxxx"
            value={number}
            onChange={e => handleChange(e.target.value)}
          />
        </div>
        <p className="inputContainer__OutputField">
          <span>Value: {number}</span>
        </p>
        {error && (
          <>
            <p className="errorMessage">{error}</p>
          </>
        )}
        <button type="submit" className="inputContainer__Btn">
          Reset
        </button>
      </form>
    </div>
  );
};
