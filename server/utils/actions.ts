"use server";
import db from "./db";

type Occasion = {
  name: string;
  description: string;
  cost: number;
  date: Date;
  time: string;
  location: string;
  max_tickets: number;
};

type Ticket = {
  user_id: string;
  event_id: number;
  ticket_code: string;
  purchase_date: Date;
  seat_number: string;
};

export const createOccasion = async (occasion: Occasion) => {
  const { name, description, cost, date, time, location, max_tickets } =
    occasion;
  const addOccasion = await db.events.create({
    data: {
      name,
      description,
      cost,
      date,
      time,
      location,
      max_tickets,
    },
  });
};

export const createTicket = async (ticket: Ticket) => {
  const { user_id, event_id, ticket_code, seat_number } = ticket;
  const addTicket = await db.ticket.create({
    data: {
      user_id,
      event_id,
      ticket_code,
      seat_number,
    },
  });
};

const events = [
  {
    name: "Lauv",
    description:
      "Multi-platinum certified singer, songwriter, producer, and pop visionary Lauv has announced his return to Australia, with The Between Albums Tour landing down under this October.",
    cost: 0.25,
    date: new Date("21 October 2023"),
    time: "7:00PM AEST",
    location: "Enmore Theatre, Sydney",
    max_tickets: 50,
  },
  {
    name: "Chet Faker",
    description:
      "Australia’s own Chet Faker will make his return down under this October! These are the first Chet Faker shows in Australia since 2015, when he performed to a sold-out Sydney Opera House forecourt crowd and played a ground-breaking five hometown shows at the Palais Theatre in Melbourne.",
    cost: 1,
    date: new Date("10 October 2023"),
    time: "8:00PM AEST",
    location: "Enmore Theatre, Sydney",
    max_tickets: 80,
  },
  {
    name: "Charlie Puth",
    description:
      "Charlie Puth has proven to be one of the industry’s most consistent hitmakers and sought-after collaborators. Puth has amassed eight multi-platinum singles, four GRAMMY nominations, three Billboard Music Awards, a Critic’s Choice Award, and a Golden Globe nomination. His 2018 GRAMMY-nominated LP, Voicenotes, was RIAA Certified Gold only four days after its release and has logged over 5.6 billion streams worldwide.",
    cost: 2.35,
    date: new Date("1 November 2023"),
    time: "6:30PM AEST",
    location: "Aware Super Theatre, Sydney",
    max_tickets: 150,
  },
  {
    name: "Wicked",
    description:
      "The Broadway sensation WICKED is flying into the Regent Theatre from March. WICKED looks at what happened in the Land of Oz... but from a different angle. Winner of over 100 major awards including the Grammy Award and three Tony Awards, WICKED is “A COMPLETE TRIUMPH! An original musical that will make you laugh, cry and think.” USA Today.",
    cost: 5,
    date: new Date("8 November 2023"),
    time: "1:00PM AEST",
    location: "Sydney Lyric Theatre, Sydney",
    max_tickets: 200,
  },
  {
    name: "Beauty and the Beast",
    description:
      "Beauty and the Beast is a Disney stage musical with music by Alan Menken, lyrics by Howard Ashman and Tim Rice, and a book by Linda Woolverton.",
    cost: 4.25,
    date: new Date("20 December 2023"),
    time: "1:30PM AEST",
    location: "Capitol Theatre, Sydney",
    max_tickets: 250,
  },
];

const seedDatabase = async () => {
  events.forEach((event) => {
    createOccasion(event);
  });
};

async function main() {
  await seedDatabase();
}

main()
  .catch((error) => {
    console.error("Error seeding the database:", error);
  })
  .finally(async () => {
    await db.$disconnect(); // Disconnect the Prisma client when seeding is done
  });
