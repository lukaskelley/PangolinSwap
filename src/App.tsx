// @ts-ignore
import React from "react";
import "./App.css";
import { useWeb3React } from "@web3-react/core";
import { Button, SwapWidget } from "@pangolindex/components";
import { injected, useEagerConnect, useInactiveListener } from "./utils/hooks";

function App() {
  const context = useWeb3React();
  const { account } = context;
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  return (
    <div className="App">
      <div style={{ width: "100%", display:"flex", paddingTop:"50px"}}>
        <div className="backBtnDiv1">
        </div>
        <div className="backBtnDiv2">
          <Button variant="primary">
            <a href="https://app.doodcats.net/" style={{textDecoration:"none"}}>Go Back Website</a>
          </Button>
        </div>
        <div className="backBtnDiv3"/>
      </div>
      <h1 className="fire">Swap</h1>
      <div className="swap">
        <Button
          variant="primary"
          isDisabled={!!account}
          onClick={() => {
            injected.activate();
          }}
          width="300px"
          maxWidth="300px"
        >
          {account ? "Connect Wallet" : "Connected"}
        </Button>
     </div>
      <div style={{ marginTop: "10px", maxWidth: "400px",  margin:" 30px"}}>
        <SwapWidget />
      </div>
    </div>
  );
}

export default App;
