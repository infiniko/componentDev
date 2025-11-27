import { Input } from "./input";

const StepThree = ({ formData, setFormData }) => {
  const { salary, occupation } = formData;
  return (
    <div className="flex flex-col my-5 gap-4">
      <Input
        id="salary"
        label={"Salary"}
        value={salary}
        handleChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            salary: e.target.value,
          }))
        }
      />
      <Input
        id="occupation"
        label={"Occupation"}
        value={occupation}
        handleChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            occupation: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default StepThree;
