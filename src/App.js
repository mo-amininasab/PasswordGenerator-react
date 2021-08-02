import React from "react";

import Navbar from "./components/Navbar";
import ContainerCenter from "./components/ContainerCenter";
import GeneratorBox from "./components/GeneratorBox";
import PasswordBar from "./components/PasswordBar";
import DoubleBoarderContainer from "./components/UI/DoubleBoarderContainer";

function App() {
  return (
    <>
      <Navbar />
      <ContainerCenter>
        <DoubleBoarderContainer>
          <PasswordBar />
        </DoubleBoarderContainer>

        <DoubleBoarderContainer>
          <GeneratorBox />
        </DoubleBoarderContainer>

        <p className="text-center text-gray-500 text-xs mb-12">
          &copy;2021. All rights reserved.
        </p>
      </ContainerCenter>
    </>
  );
}

export default App;
