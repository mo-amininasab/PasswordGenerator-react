import React, { useEffect } from "react";
import { generatePasswordActions } from "../store/index";
import { useDispatch, useSelector } from "react-redux";

import CheckBoxInput from "./UI/CheckBoxInput";
import NumberInput from "./UI/NumberInput";

import passwordGenerator from "./passwordGenerator";

function GeneratorBox() {
  const length = useSelector((state) => state.password.length);
  const hasLowercase = useSelector((state) => state.password.hasLowercase);
  const hasUppercase = useSelector((state) => state.password.hasUppercase);
  const hasNumbers = useSelector((state) => state.password.hasNumbers);
  const hasSymbols = useSelector((state) => state.password.hasSymbols);
  const isRegenerate = useSelector((state) => state.password.isRegenerate);
  const dispatch = useDispatch();

  const numberInputOnChangeHandler = (event) => {
    dispatch(generatePasswordActions.lengthHandler(event.target.value));
  };

  const CheckBoxInputLowerCaseOnChangeHandler = () => {
    dispatch(generatePasswordActions.hasLowercaseHandler());
  };

  const CheckBoxInputUpperCaseOnChangeHandler = () => {
    dispatch(generatePasswordActions.hasUppercaseHandler());
  };

  const CheckBoxInputNumbersOnChangeHandler = () => {
    dispatch(generatePasswordActions.hasNumbersHandler());
  };

  const CheckBoxInputSymbolsOnChangeHandler = () => {
    dispatch(generatePasswordActions.hasSymbolsHandler());
  };

  useEffect(() => {
    const thePassword = passwordGenerator(
      length,
      hasLowercase,
      hasUppercase,
      hasNumbers,
      hasSymbols
    );

    dispatch(generatePasswordActions.createPasswordHandler(thePassword));

    return;
  }, [
    length,
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSymbols,
    isRegenerate,
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
        isChecked={hasLowercase}
      />
      <CheckBoxInput
        id="uppercase"
        label="Uppercase"
        onChange={CheckBoxInputUpperCaseOnChangeHandler}
        isChecked={hasUppercase}
      />
      <CheckBoxInput
        id="numbers"
        label="Numbers"
        onChange={CheckBoxInputNumbersOnChangeHandler}
        isChecked={hasNumbers}
      />
      <CheckBoxInput
        id="symbols"
        label="Symbols"
        onChange={CheckBoxInputSymbolsOnChangeHandler}
        isChecked={hasSymbols}
      />
    </div>
  );
}

export default GeneratorBox;
