// ABIs
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Teck from "../src/blockchain/abis/Teck.json";
// Config
import config from "../src/blockchain/config.json";
import NavBar from "./components/NavBar/NavBar";

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface Contract {
  [key: number]: { Teck: { address: string } };
}

function App() {
  const [message, setMessage] = useState("");
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [teck, setTeck] = useState<ethers.Contract | null>(null);
  const [occasions, setOccasions] = useState<any[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);

  // const loadBlockchainData = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   setProvider(provider);

  //   const network = await provider.getNetwork();
  //   const address = (config as any)[network.chainId].Teck.address;
  //   const teck = new ethers.Contract(address, Teck, provider);
  //   setTeck(teck);

  //   const totalOccasions = await teck.totalOccasions();
  //   const occasions = [];

  //   for (var i = 1; i <= totalOccasions; i++) {
  //     const occasion = await teck.getOccasion(i);
  //     occasions.push(occasion);
  //   }

  //   setOccasions(occasions);

  //   window.ethereum.on("accountsChanged", async () => {
  //     const accounts = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     const account = ethers.utils.getAddress(accounts[0]);
  //     setAccount(account);
  //   });
  // };

  useEffect(() => {
    fetch("/hi")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
    // loadBlockchainData();
  }, []);

  return (
    <>
      <NavBar />
      <div>{message}</div>
      <div>{account}</div>
      {occasions.map((occasion, index) => {
        return <div key={index}>{occasion.name}</div>;
      })}
    </>
  );
}

export default App;
