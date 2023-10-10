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

  const occasions = [
    {
      name: "Lauv",
      description:
        "Multi-platinum certified singer, songwriter, producer, and pop visionary Lauv has announced his return to Australia, with The Between Albums Tour landing down under this October.",
      cost: tokens(0.25),
      date: "21 October 2023",
      time: "7:00PM AEST",
      location: "Enmore Theatre, Sydney",
      tickets: 50,
    },
    {
      name: "Chet Faker",
      description:
        "Australia’s own Chet Faker will make his return down under this October! These are the first Chet Faker shows in Australia since 2015, when he performed to a sold-out Sydney Opera House forecourt crowd and played a ground-breaking five hometown shows at the Palais Theatre in Melbourne.",
      cost: tokens(1),
      date: "10 October 2023",
      time: "8:00PM AEST",
      location: "Enmore Theatre, Sydney",
      tickets: 80,
    },
    {
      name: "Charlie Puth",
      description:
        "Charlie Puth has proven to be one of the industry’s most consistent hitmakers and sought-after collaborators. Puth has amassed eight multi-platinum singles, four GRAMMY nominations, three Billboard Music Awards, a Critic’s Choice Award, and a Golden Globe nomination. His 2018 GRAMMY-nominated LP, Voicenotes, was RIAA Certified Gold only four days after its release and has logged over 5.6 billion streams worldwide.",
      cost: tokens(2.35),
      date: "1 November 2023",
      time: "6:30PM AEST",
      location: "Aware Super Theatre, Sydney",
      tickets: 150,
    },
    {
      name: "Wicked",
      description:
        "The Broadway sensation WICKED is flying into the Regent Theatre from March. WICKED looks at what happened in the Land of Oz... but from a different angle. Winner of over 100 major awards including the Grammy Award and three Tony Awards, WICKED is “A COMPLETE TRIUMPH! An original musical that will make you laugh, cry and think.” USA Today.",
      cost: tokens(5),
      date: "8 November 2023",
      time: "1:00PM AEST",
      location: "Sydney Lyric Theatre, Sydney",
      tickets: 200,
    },
    {
      name: "Beauty and the Beast",
      description:
        "Beauty and the Beast is a Disney stage musical with music by Alan Menken, lyrics by Howard Ashman and Tim Rice, and a book by Linda Woolverton.",
      cost: tokens(4.25),
      date: "20 December 2023",
      time: "1:30PM AEST",
      location: "Capitol Theatre, Sydney",
      tickets: 250,
    },
  ];

  for (var i = 0; i < occasions.length; i++) {
    const transaction = await teck
      .connect(deployer)
      .list(
        occasions[i].name,
        occasions[i].description,
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
