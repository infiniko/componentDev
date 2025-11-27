import React from "react";
import { Input } from "./input";

const StepTwo = ({ formData, setFormData }) => {
  const { address, city } = formData;
  return (
    <div className="flex flex-col my-5 gap-4">
      <Input
        id="address"
        label={"Address"}
        value={address}
        handleChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            address: e.target.value,
          }))
        }
      />
      <Input
        id="city"
        label={"City"}
        value={city}
        handleChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            city: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default StepTwo;
