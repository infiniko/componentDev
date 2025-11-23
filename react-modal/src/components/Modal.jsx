import { useEffect } from "react";

export default function Modal({ title, children, handleClose }) {
  useEffect(() => {
    const escapeHandler = function (e) {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", escapeHandler);

    return () => window.removeEventListener("keydown", escapeHandler);
  }, []);
  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={handleClose}></div>
      <div className="modal-content">
        <h1>{title}</h1>
        {children}
        <button onClick={handleClose}>x</button>
      </div>
    </div>
  );
}
