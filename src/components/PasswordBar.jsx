import React from "react";

function PasswordBar(props) {
  const copyToClipboard = () => {
    let elementText = document.getElementById("password").textContent;
    return navigator.clipboard.writeText(elementText);
  };
  return (
    <div className="flex flex-col">
      <p className="text-center font-mono text-md whitespace-nowrap overflow-auto" id="password">
        {props.createdPassword}
      </p>
      <div className="flex mx-auto space-x-2 mt-3">
        <button
          type="button"
          className="w-20 py-2 mx-auto bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline bg-gradient-to-r from-pink-400 to-yellow-500 focus:ring focus:ring-pink-500"
          onClick={copyToClipboard}
        >
          Copy
        </button>

        <button
          type="button"
          className="w-9 py-2 mx-auto bg-red-500 hover:bg-red-700 text-white font-bold rounded focus:outline-none focus:shadow-outline bg-gradient-to-r from-pink-400 to-yellow-500"
          onClick={props.onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PasswordBar;
