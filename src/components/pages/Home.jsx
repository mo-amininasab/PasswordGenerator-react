import React from "react";

import ContainerCenter from "../ContainerCenter";
import GeneratorBox from "../GeneratorBox";
import PasswordBar from "../PasswordBar";
import DoubleBoarderContainer from "../UI/DoubleBoarderContainer";

function Home() {
  return (
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
  );
}

export default Home;
