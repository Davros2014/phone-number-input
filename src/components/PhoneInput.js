import React from "react";

export const PhoneInput = () => {
  return (
    <div className="inputContainer">
      <h3 className="inputContainer__Header">
        Please add your phone number here and we'll get back to you promptly
      </h3>

      <form action="" className="inputContainer__Form">
        <div className="inputContainer__phoneDetails">
          <input type="string" className="inputContainer__Input" />
        </div>
        <p className="inputContainer__OutputField"></p>
      </form>
    </div>
  );
};
