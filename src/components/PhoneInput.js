import React, { useState } from "react";

export const PhoneInput = () => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    console.log("e", e);
    setValue(e);
  };
  return (
    <div className="inputContainer">
        <h3 className="inputContainer__Header">
            Please submit your phone number here and we'll get back to you promptly
        </h3>

        <form action="" className="inputContainer__Form">
            <div className="inputContainer__phoneDetails">
                <input
                    type="string"
                    className="inputContainer__Input"
                    placeholder="Please add your phone number here - (xxx) xxx-xxxx"
                    value={value}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
            <p className="inputContainer__OutputField">{value}</p>
            <button type="submit" className="inputContainer__Btn">
          Reset
        </button>
      </form>
    </div>
  );
};
