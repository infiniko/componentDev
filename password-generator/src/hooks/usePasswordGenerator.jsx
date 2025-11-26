import { useState } from "react";

export function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //function to generate password based on checkedData & length
  const generatePasssword = (checkboxData, passLength) => {
    let charset = "",
      generatedPassword = "";
    const selectedOption = checkboxData.filter((checkbox) => checkbox.checked);

    if (selectedOption.length === 0) {
      setError("Please select atleast one option");
      setPassword("");
      return;
    }

    //switch for different checked state
    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercasse letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "@#$%&*";
          break;
        default:
      }
    });

    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setError("");
  };

  return { password, error, generatePasssword };
}
