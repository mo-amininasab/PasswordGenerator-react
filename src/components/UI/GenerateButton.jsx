import React from "react";

function GenerateButton(props) {
  return (
    <button
      type={props.type}
      className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline"
    >
      {props.title}
    </button>
  );
}

export default GenerateButton;
