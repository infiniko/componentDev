import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <Modal title={"Big title"} handleClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque animi
          optio distinctio fuga temporibus sit, vitae nemo illo possimus
          molestiae expedita quia necessitatibus totam rerum adipisci placeat!
          Culpa, minus natus.
        </Modal>
      )}
    </>
  );
}

export default App;
