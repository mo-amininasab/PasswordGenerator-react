import React, { useState } from "react";

import Navbar from "./components/Navbar";
import ContainerCenter from "./components/ContainerCenter";
import GeneratorBox from "./components/GeneratorBox";
import PasswordBar from "./components/PasswordBar";
import DoubleBoarderContainer from "./components/UI/DoubleBoarderContainer";

function App() {
  const [createdPassword, setCreatedPassword] = useState("");
  const [isRegenerate, setIsRegenerate] = useState(false);

  const passwordCreatedHandler = (thePass) => {
    setCreatedPassword(thePass);
    setIsRegenerate(false);
  };

  const regeneratePasswordHandler = () => {
    setIsRegenerate(true);
  };

  return (
    <>
      <Navbar />
      <ContainerCenter>
        <DoubleBoarderContainer>
          <PasswordBar
            createdPassword={createdPassword}
            onClick={regeneratePasswordHandler}
          />
        </DoubleBoarderContainer>

        <DoubleBoarderContainer>
          <GeneratorBox
            onPasswordCreated={passwordCreatedHandler}
            isRegenerate={isRegenerate}
          />
        </DoubleBoarderContainer>

        <p className="text-center text-gray-500 text-xs mb-12">
          &copy;2021. All rights reserved.
        </p>
      </ContainerCenter>
    </>
  );
}

export default App;
