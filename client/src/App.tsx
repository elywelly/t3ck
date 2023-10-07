// ABIs
import React, { useEffect, useState } from "react";
// import TECK from "./abis/TECK.json";
// // Config
// import config from "./config.json";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/hi")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <div>{message}</div>;
}

export default App;
