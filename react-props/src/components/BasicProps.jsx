import { useState } from "react";

const Button = ({ text, color, size, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      px-6 py-2 rounded-lg font-medium transition-all duration-300
      ${size === "small" ? "text-sm px-4 py-1" : ""}
      ${size === "large" ? "text-lg px-8 py-3" : ""}
      ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
      ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
      ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
      ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
};

const BasicProps = () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-4 text-gray-800`">Basic props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque incidunt,
        consequatur unde rem dolores quae dolorum dolore ad dicta tenetur vel
        vitae nostrum deserunt, fugit modi hic! Repellendus temporibus
        doloremque rerum fugit dolorum, aperiam ducimus voluptatibus voluptate
        dignissimos exercitationem, id mollitia iste voluptatum ipsam quibusdam
        accusamus, vel molestias. Sapiente, expedita.
      </p>
      <div className="space-y-4">
        <h3>Different colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary button"
            color="primary"
            onClick={() => setClickCount((p) => p + 1)}
          ></Button>
          <Button
            text="Secondary button"
            color="secondary"
            onClick={() => setClickCount((p) => p + 1)}
          ></Button>
          <Button
            text="Danger button"
            color="danger"
            onClick={() => setClickCount((p) => p + 1)}
          ></Button>
          <Button
            text="Success button"
            color="success"
            onClick={() => setClickCount((p) => p + 1)}
          ></Button>
        </div>
      </div>
      <div className="space-y-4">
        <h3>Different sizes</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Small"
            size="small"
            color="primary"
            onClick={() => setClickCount((p) => p + 1)}
          ></Button>
          <Button
            text="Large"
            size="large"
            color="secondary"
            disabled={true}
            onClick={() => setClickCount((p) => p + 1)}
          ></Button>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-lg font-medium text-gray-700">
          Click Count:{" "}
          <span className="text-blue-600 font-bold">{clickCount}</span>
        </p>
      </div>
    </section>
  );
};

export default BasicProps;
