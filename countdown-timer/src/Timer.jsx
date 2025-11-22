import { useEffect, useState } from "react";

function Timer({ duration }) {
  const [displayTime, setDisplayTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setDisplayTime((prev) => prev - 1);
    }, 1000);
  }, [displayTime]);

  function formatTime(seconds) {
    let totalMins = Math.floor(seconds / 60);
    let totalHours = Math.floor(totalMins / 60);
    let totalDays = Math.floor(totalHours / 24);

    let displaySeconds = seconds % 60;
    let displayMinutes = totalMins % 60;
    let displayHours = totalHours % 24;

    return `${totalDays} : ${String(displayHours).padStart(2, "0")}: ${String(
      displayMinutes
    ).padStart(2, "0")}: ${String(displaySeconds).padStart(2, "0")}`;
  }
  return (
    <div>
      <h1>{formatTime(displayTime)}</h1>
    </div>
  );
}

export default Timer;
