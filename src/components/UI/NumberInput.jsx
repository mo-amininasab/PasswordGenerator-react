import React from "react";
const NumberInput = (props) => {
  return (
    <div className="flex flex-row space-x-2">
      <label htmlFor="length" className="my-auto">
        {props.label}
      </label>
      <input
        type="Number"
        id="length"
        className="w-10 bg-gray-200 border border-gray-400 rounded hover:border-gray-700 focus:border-gray-400"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default NumberInput;
