import { useState } from "react";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";

function App() {
  // slider state & checkbox array state
  const [charLength, setCharLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercasse letters", checked: false },
    { title: "Include Lowercase letters", checked: false },
    { title: "Include Numbers", checked: false },
    { title: "Include Symbols", checked: false },
  ]);
  const [copied, setCopied] = useState(false);

  function handleCheckboxChange(index) {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[index].checked = !updatedCheckboxData[index].checked;
    setCheckboxData(updatedCheckboxData);
  }

  //copy password handler
  function handleCopy() {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  const { password, error, generatePasssword } = usePasswordGenerator();
  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="password-name">{password}</div>
          <button className="copyBtn" onClick={handleCopy}>
            {copied ? "Copied" : "copy"}
          </button>
        </div>
      )}
      <div className="slider">
        <span>
          <label>Character length</label>
          <label>{charLength}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={charLength}
          onChange={(e) => {
            setCharLength(e.target.value);
          }}
        />
      </div>
      <div className="checkboxes">
        {checkboxData.map((data, index) => (
          <div key={index}>
            <input
              type="checkbox"
              value={data.checked}
              checked={data.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <label>{data.title}</label>
          </div>
        ))}
      </div>
      <div className="pass-strength"></div>

      {error && <div className="errorMessage">{error}</div>}
      <button
        className="generateBtn"
        onClick={() => {
          generatePasssword(checkboxData, charLength);
        }}
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
