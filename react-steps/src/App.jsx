import StepsTracker from "./StepsTracker";

const stepsConfig = [
  {
    id: 1,
    name: "Personal details",
    component: () => <div>Enter Personal Details</div>,
  },
  {
    id: 2,
    name: "Address details",
    component: () => <div>Enter Address Details</div>,
  },
  {
    id: 3,
    name: "Financial details",
    component: () => <div>Enter Financial Details</div>,
  },
  {
    id: 4,
    name: "Employment details",
    component: () => <div>Enter Employment Details</div>,
  },
];

function App() {
  return (
    <div>
      <StepsTracker stepsConfig={stepsConfig}></StepsTracker>
    </div>
  );
}

export default App;
