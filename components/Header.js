import Dropdown from "./Dropdown";
import { useState } from "react";

const Header = () => {
  const [currentId, setCurrentId] = useState();

  const whyData = [
    { text: "Dropdown 1", href: "#" },
    { text: "Dropdown 2", href: "#" },
  ];
  const solutionsData = [
    { text: "Dropdown 1", href: "#" },
    { text: "Dropdown 2", href: "#" },
  ];
  const resourcesData = [
    { text: "Dropdown 1", href: "#" },
    { text: "Dropdown 2", href: "#" },
  ];

  function dropdownClicked(id) {
    setCurrentId(id);
  }

  return (
    <div className="container flex flex-wrap items-center justify-between mx-auto p-6 text-sm">
      <h1 className="font-bold">Prefacely</h1>
      <ul className="flex gap-3">
        <li>
          <Dropdown
            id={0}
            text="Why Prefacely?"
            data={whyData}
            currentId={currentId}
            dropdownClicked={dropdownClicked}
          />
        </li>
        <li>
          <Dropdown
            id={1}
            text="Solutions"
            data={whyData}
            currentId={currentId}
            dropdownClicked={dropdownClicked}
          />
        </li>
        <li>
          <Dropdown
            id={2}
            text="Resources"
            data={whyData}
            currentId={currentId}
            dropdownClicked={dropdownClicked}
          />
        </li>
        <li>Pricing</li>
      </ul>
      <div class="flex gap-2">
        <button className="bg-white border-2 border-blue-500 p-2 pl-4 pr-4 rounded-3xl">
          Log in
        </button>
        <button className="bg-blue-500 text-white p-2 pl-4 pr-4 rounded-3xl">
          Start free trial
        </button>
      </div>
    </div>
  );
};

export default Header;
