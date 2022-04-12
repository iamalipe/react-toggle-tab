import React from "react";
import styled from "styled-components";

import ToggleTab from "./Components/ToggleTab";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

function App() {
  const names = ["Tab01", "Tab02", "Tab03", "Tab04"];
  // const names = ["Tab01", "Tab02"];
  return (
    <Div>
      <ToggleTab names={names} id="Tab" />
    </Div>
  );
}

export default App;
