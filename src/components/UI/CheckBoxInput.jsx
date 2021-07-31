import React from "react";

function CheckBoxInput(props) {
  return (
    <div className="flex flex-row space-x-2">
      <input
        type="checkbox"
        id={props.id}
        className="checked:bg-blue-600 checked:border-transparent my-auto"
        onChange={props.onChange}
        defaultChecked={props.isChecked}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default CheckBoxInput;
