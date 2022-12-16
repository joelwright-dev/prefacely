import Dropdown from "./Dropdown";
import { useState } from "react";

const Header = () => {
  const [currentId, setCurrentId] = useState();
  const [headerOpen, setHeaderOpen] = useState(false);

  const whyData = [
    { text: "Incredible results", href: "#the-proof" },
    {
      text: "Improve your cold communications",
      href: "#improve-your-cold-communications",
    },
  ];
  const solutionsData = [
    { text: "The results", href: "#the-results" },
    { text: "What Prefacely does", href: "#the-process" },
  ];

  function dropdownClicked(id) {
    setCurrentId(id);
  }

  function handleHeader() {
    setHeaderOpen(!headerOpen);
  }

  return (
    <>
      <div className="flex flex-wrap lg:flex-row xs:flex-col items-center justify-between p-6 sm:max-w-4xl sm:text-sm lg:text-base lg:max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="logo.png" className="h-6" />
          <h1 className="font-bold">PrefaceLy</h1>
        </div>
        <div className="block sm:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-blue-500 hover:border-blue-500"
            onClick={handleHeader}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="gap-3 hidden sm:flex">
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
              text="The Process"
              data={solutionsData}
              currentId={currentId}
              dropdownClicked={dropdownClicked}
            />
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        <div className="gap-2 hidden sm:flex">
          <a
            href="#pricing"
            className="bg-blue-500 text-white p-2 pl-4 pr-4 rounded-3xl"
          >
            Start free trial
          </a>
        </div>
      </div>
      <ul
        className={`gap-3 ${
          headerOpen ? "" : "hidden"
        } flex-col flex px-5 pb-5 border-b-2 border-black sm:hidden`}
      >
        <li>
          <Dropdown
            id={0}
            text="Why Prefacely?"
            data={whyData}
            currentId={currentId}
            dropdownClicked={dropdownClicked}
            mobile={true}
          />
        </li>
        <li>
          <Dropdown
            id={1}
            text="The Process"
            data={solutionsData}
            currentId={currentId}
            dropdownClicked={dropdownClicked}
            mobile={true}
          />
        </li>
        <li className="px-2">
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#pricing">
            <button className="bg-blue-500 text-white p-2 pl-4 pr-4 rounded-3xl w-full">
              Start free trial
            </button>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
