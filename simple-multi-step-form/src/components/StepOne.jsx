import React from "react";
import { Input } from "./input";

const StepOne = ({ formData, setFormData }) => {
  const { firstName, lastName, age } = formData;
  return (
    <div className="flex flex-col my-5 gap-4">
      <Input
        id="firstName"
        label={"First Name"}
        value={firstName}
        handleChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            firstName: e.target.value,
          }))
        }
      />
      <Input
        id="lastName"
        label={"Last Name"}
        value={lastName}
        handleChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            lastName: e.target.value,
          }))
        }
      />
      <Input
        id="age"
        label={"Age"}
        value={age}
        handleChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            age: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default StepOne;
