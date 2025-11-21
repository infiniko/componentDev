import "./App.css";
import Autocomplete from "./components/Autocomplete";

// const debounce = function (fn) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     let context = this;
//     timer = setTimeout(() => {
//       timer = null;
//       fn.apply(context, args);
//     }, 400);
//   };
// };

function App() {
  return <Autocomplete />;
}

export default App;
