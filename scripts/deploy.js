const hre = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners();
  const NAME = "Teck";
  const SYMBOL = "T3CK";

  // Deploy contract
  const Teck = await ethers.getContractFactory("Teck");
  const teck = await Teck.deploy(NAME, SYMBOL);
  await teck.deployed();

  console.log(`Deployed Teck Contract at: ${teck.address}\n`);

  // List 6 events
  const occasions = [
    {
      name: "lauv",
      cost: tokens(3),
      tickets: 0,
      date: "21 October 2023",
      time: "7:00PM AEST",
      location: "Enmore Theatre, Sydney",
    },
    {
      name: "Chet Faker",
      cost: tokens(1),
      tickets: 125,
      date: "10 October 2023",
      time: "8:00PM AEST",
      location: "Enmore Theatre, Sydney",
    },
    {
      name: "Charlie Puth",
      cost: tokens(0.25),
      tickets: 200,
      date: "1 November 2023",
      time: "8:00PM AEST",
      location: "Aware Super Theatre, Sydney",
    },
    {
      name: "Wicked",
      cost: tokens(5),
      tickets: 0,
      date: "8 November 2023",
      time: "1:00PM AEST",
      location: "Sydney Lyric Theatre, Sydney",
    },
    {
      name: "Beauty and the Beast",
      cost: tokens(1.5),
      tickets: 125,
      date: "20 December 2023",
      time: "1:00PM AEST",
      location: "Capitol Theatre, Sydney",
    },
  ];

  for (var i = 0; i < 5; i++) {
    const transaction = await teck
      .connect(deployer)
      .list(
        occasions[i].name,
        occasions[i].cost,
        occasions[i].tickets,
        occasions[i].date,
        occasions[i].time,
        occasions[i].location
      );

    await transaction.wait();

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
