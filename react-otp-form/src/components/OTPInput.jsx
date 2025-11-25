import React, { useEffect, useRef, useState } from "react";

const OTPInput = ({ digits = 4 }) => {
  //array of refs for each input
  const [otpDigits, setOtpDigits] = useState(Array(digits).fill(""));
  const inputRefs = useRef([]);

  // on mount focus on first input
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // handle input from user

  function handleInput(value, index) {
    // only valid numbers
    if (isNaN(value)) return;

    const newArr = [...otpDigits];
    const finalValue = value.slice(-1).trim(); //trim spaces
    newArr[index] = finalValue;
    setOtpDigits(newArr);

    // focus on next input if current one assigned t0 a  value
    finalValue && inputRefs.current[index + 1]?.focus();
  }

  // handle backspaces and backspace only if current value gone
  function handleKeyDown(e, index) {
    if (!e.target.value && e.key === "Backspace") {
      inputRefs.current[index - 1]?.focus();
    }
  }

  // handle accidental clicks
  function handleClick(index) {
    inputRefs.current[index].setSelectionRange(1, 1);
  }

  return (
    <div className="otp-input">
      {otpDigits.map((digit, index) => (
        <input
          key={index}
          ref={(input) => (inputRefs.current[index] = input)}
          type="text"
          value={otpDigits[index]}
          onChange={(e) => handleInput(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
