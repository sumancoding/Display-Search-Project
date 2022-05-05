import React, { useState } from "react";
import Characters from "./component/Characters";
import Header from "./component/Header";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <Header setText={setText} />
      <Characters text={text} />
    </div>
  );
};

export default App;
