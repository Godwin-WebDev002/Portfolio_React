import { useState } from "react";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Projects } from "./Pages/Projects";

const Component = () => {
  const [currComp, setCurrComp] = useState("About");

  const handleClick = (component: any) => {
    setCurrComp(component);
  };

  return (
    <div className="bg-[#212529] w-[100%] my-5 mt-15 sm:mt-5 h-content pb-10 rounded-3xl border-2 border-[#495057] overflow-auto ">
      <div className="w-[100%] flex justify-end relative ">
        <nav className="bg-[#495057] w-[93.5%] sm:w-110 h-10 sm:rounded-bl-xl sm:relative fixed top-0 sm:right-0 z-20 rounded-b-2xl sm:rounded-b-none ">
          <ul className="h-[100%] flex justify-evenly items-center">
            <li>
              <button
                onClick={() => handleClick("About")}
                className={`cursor-pointer font-semibold hover:text-[#fff] ${
                  currComp === "About" ? "text-[#fff]" : "text-[#868e96]"
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Project")}
                className={`cursor-pointer font-semibold hover:text-[#fff] ${
                  currComp === "Project" ? "text-[#fff]" : "text-[#868e96]"
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Contact")}
                className={`cursor-pointer font-semibold hover:text-[#fff] ${
                  currComp === "Contact" ? "text-[#fff]" : "text-[#868e96]"
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {currComp === "About" && <About />}
      {currComp === "Project" && <Projects />}
      {currComp === "Contact" && <Contact />}
    </div>
  );
};

export default Component;
