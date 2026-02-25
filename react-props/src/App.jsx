import "./App.css";

import BasicProps from "./components/BasicProps";
import RefProps from "./components/RefProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import ThemeToggler, { ThemeProvider } from "./components/ThemeToggler";

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props" },
    { id: "ref", label: "Ref Props" },
    { id: "children", label: "Children Props" },
    { id: "complex", label: "Complex Props" },
    { id: "theme", label: "Theme Props" },
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all bg-blue-500 text-white hover:bg-sky-700`}
              key={section.id}
            >
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props</h1>
        </header>
        <div className="space-y-8">
          <div id="basic" className="sroll-mt-200">
            <BasicProps />
          </div>
          <div id="basic" className="sroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="sroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="sroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="sroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
