import React, { useEffect, useState } from "react";

export default function DropdownAlt({
  id,
  text,
  data,
  currentId,
  dropdownClicked,
  mobile,
}) {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
    dropdownClicked(id);
  };

  useEffect(() => {
    if (id !== currentId) {
      setOpen(false);
    }
  });

  return (
    <div className="inline-flex w-full">
      <div className="relative w-full">
        <button
          type="button"
          className={`inline-flex w-full items-center justify-center h-full hover:text-gray-700 px-2 ${
            mobile ? "justify-between" : ""
          }`}
          onClick={handleDropDown}
        >
          {text}
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
          className={`absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="p-2">
            {data.map((link) => {
              return (
                <a
                  key={link.text}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                >
                  {link.text}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
