import React, { useEffect, useState } from "react";

export default function Dropdown({ id, text, data, currentId }) {
  const [isOpen, setOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState(text);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (id !== currentId) {
      setOpen(false);
    }
  });

  function handleClick(link) {
    link.click();
    setDropdownText(link.text);
  }

  return (
    <div className="inline-flex w-full">
      <div className="relative w-full">
        <button
          type="button"
          className="flex w-full justify-between items-center h-full hover:text-gray-700 text-left"
          onClick={handleDropDown}
        >
          {dropdownText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`absolute right-0 z-10 w-full mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="p-2">
            {data.map((link) => {
              return (
                <button
                  key={link.text}
                  type="button"
                  onClick={() => handleClick(link)}
                  className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                >
                  {link.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
