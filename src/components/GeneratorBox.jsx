import React, { useState, useEffect } from "react";

import CheckBoxInput from "./UI/CheckBoxInput";
import NumberInput from "./UI/NumberInput";

function GeneratorBox(props) {
  const [length, setLength] = useState(12);
  const [isCheckBoxInputLowercase, setIsCheckBoxInputLowercase] =
    useState(true);
  const [isCheckBoxInputUppercase, setIsCheckBoxInputUppercase] =
    useState(false);
  const [isCheckBoxInputNumbers, setIsCheckBoxInputNumbers] = useState(false);
  const [isCheckBoxInputSymbols, setIsCheckBoxInputSymbols] = useState(false);

  const numberInputOnChangeHandler = (event) => {
    setLength(event.target.value);
  };

  const CheckBoxInputLowerCaseOnChangeHandler = (event) => {
    setIsCheckBoxInputLowercase(event.target.checked);
  };

  const CheckBoxInputUpperCaseOnChangeHandler = (event) => {
    setIsCheckBoxInputUppercase(event.target.checked);
  };

  const CheckBoxInputNumbersOnChangeHandler = (event) => {
    setIsCheckBoxInputNumbers(event.target.checked);
  };

  const CheckBoxInputSymbolsOnChangeHandler = (event) => {
    setIsCheckBoxInputSymbols(event.target.checked);
  };

  useEffect(() => {
    let lowers = "abcdefghijklmnopqrstuvwxyz";
    let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()";

    let is_lower = isCheckBoxInputLowercase;
    let is_upper = isCheckBoxInputUppercase;
    let is_numbers = isCheckBoxInputNumbers;
    let is_symbols = isCheckBoxInputSymbols;

    let bag_of_chars = "";

    if (is_lower) {
      bag_of_chars += lowers;
    }

    if (is_upper) {
      bag_of_chars += uppers;
    }

    if (is_numbers) {
      bag_of_chars += numbers;
    }

    if (is_symbols) {
      bag_of_chars += symbols;
    }

    let thePassword = "";

    if (bag_of_chars.length === 0) {
      thePassword = "null";
    } else {
      for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * bag_of_chars.length);
        thePassword += bag_of_chars[index];
      }
    }

    props.onPasswordCreated(thePassword);

    return;
  }, [
    length,
    isCheckBoxInputLowercase,
    isCheckBoxInputUppercase,
    isCheckBoxInputNumbers,
    isCheckBoxInputSymbols,
    props.isRegenerate,
  ]);

  return (
    <div className="flex flex-col w-min mx-auto">
      <NumberInput
        label="Length:"
        min="6"
        max="99"
        value={length}
        onChange={numberInputOnChangeHandler}
      />
      <CheckBoxInput
        id="lowercase"
        label="Lowercase"
        onChange={CheckBoxInputLowerCaseOnChangeHandler}
        isChecked={isCheckBoxInputLowercase}
      />
      <CheckBoxInput
        id="uppercase"
        label="Uppercase"
        onChange={CheckBoxInputUpperCaseOnChangeHandler}
        isChecked={isCheckBoxInputUppercase}
      />
      <CheckBoxInput
        id="numbers"
        label="Numbers"
        onChange={CheckBoxInputNumbersOnChangeHandler}
        isChecked={isCheckBoxInputNumbers}
      />
      <CheckBoxInput
        id="symbols"
        label="symbols"
        onChange={CheckBoxInputSymbolsOnChangeHandler}
        isChecked={isCheckBoxInputSymbols}
      />
    </div>
  );
}

export default GeneratorBox;
