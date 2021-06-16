import "./App.css";

import * as React from "react";
import { Board } from "./src/Board";

export interface AppProps {}

const App: React.VoidFunctionComponent<AppProps> = () => {
  return (
    <div className="App">
      <Board />
    </div>
  );
};

export default App;
