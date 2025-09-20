import { useState } from "react";
import Component from "./components/Component";
import { Welcome } from "./components/Welcome";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleclick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={` h-screen w-[100%] z-50 absolute top-0 left-0 transition-all duration-800 ease-in-out ${
          isOpen ? "" : "translate-y-[-100%]"
        }`}
      >
        <Welcome handleclick={handleclick} />
      </div>

      <div className={` ${isOpen ? "hidden" : ""}`}>
        <Component />
      </div>
    </>
  );
};

export default App;
