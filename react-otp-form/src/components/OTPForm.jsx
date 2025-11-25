import React, { useState } from "react";
import OTPInput from "./OTPInput";

const OTPForm = () => {
  const [phone, setPhone] = useState("");
  const [otpLogin, setOtpLogin] = useState(false);

  function handlePhone(e) {
    const value = e.target.value;

    // only numbers allowed validation
    const regex = /^[0-9]+$/;
    if (value !== "" && !regex.test(value)) {
      return;
    }

    setPhone(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //VALID length check
    if (phone.length < 9) {
      return;
    }

    //success logic follows
    setOtpLogin(true);
  }

  return (
    <div>
      {!otpLogin ? (
        <form onSubmit={handleSubmit}>
          <div className="phone-container">
            <label>Enter Phone Number</label>
            <input type="text" value={phone} onChange={handlePhone} />
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <OTPInput digits={6} />
      )}
    </div>
  );
};

export default OTPForm;
