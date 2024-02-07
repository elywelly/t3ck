export interface TicketEvent {
  name: string;
  image: string;
  description: string;
  cost: number;
  date: string;
  time: string;
  location: string;
  tickets: number;
  category: string;
}

export const ticketEvent = [
  {
    name: "Lauv",
    image:
      "https://github.com/elywelly/t3ck/blob/main/assets/posters/lauv-poster.webp",
    description:
      "Multi-platinum certified singer, songwriter, producer, and pop visionary Lauv has announced his return to Australia, with The Between Albums Tour landing down under this October.",
    cost: 0.25,
    date: "21 October 2023",
    time: "7:00PM AEST",
    location: "Enmore Theatre, Sydney",
    tickets: 50,
    category: "music",
  },
  {
    name: "Chet Faker",
    image:
      "https://github.com/elywelly/t3ck/blob/main/assets/posters/chet-poster.webp",
    description:
      "Australia’s own Chet Faker will make his return down under this October! These are the first Chet Faker shows in Australia since 2015, when he performed to a sold-out Sydney Opera House forecourt crowd and played a ground-breaking five hometown shows at the Palais Theatre in Melbourne.",
    cost: 1,
    date: "10 October 2023",
    time: "8:00PM AEST",
    location: "Enmore Theatre, Sydney",
    tickets: 80,
    category: "music",
  },
  {
    name: "Charlie Puth",
    image:
      "https://github.com/elywelly/t3ck/blob/main/assets/posters/charlie-poster.jpeg",
    description:
      "Charlie Puth has proven to be one of the industry’s most consistent hitmakers and sought-after collaborators. Puth has amassed eight multi-platinum singles, four GRAMMY nominations, three Billboard Music Awards, a Critic’s Choice Award, and a Golden Globe nomination. His 2018 GRAMMY-nominated LP, Voicenotes, was RIAA Certified Gold only four days after its release and has logged over 5.6 billion streams worldwide.",
    cost: 2.35,
    date: "1 November 2023",
    time: "6:30PM AEST",
    location: "Aware Super Theatre, Sydney",
    tickets: 150,
    category: "music",
  },
  {
    name: "Wicked",
    image:
      "https://github.com/elywelly/t3ck/blob/main/assets/posters/wicked-poster.jpeg",
    description:
      "The Broadway sensation WICKED is flying into the Regent Theatre from March. WICKED looks at what happened in the Land of Oz... but from a different angle. Winner of over 100 major awards including the Grammy Award and three Tony Awards, WICKED is “A COMPLETE TRIUMPH! An original musical that will make you laugh, cry and think.” USA Today.",
    cost: 5,
    date: "8 November 2023",
    time: "1:00PM AEST",
    location: "Sydney Lyric Theatre, Sydney",
    tickets: 200,
    category: "show",
  },
  {
    name: "Beauty and the Beast",
    image:
      "https://github.com/elywelly/t3ck/blob/main/assets/posters/beauty-poster.jpg",
    description:
      "Beauty and the Beast is a Disney stage musical with music by Alan Menken, lyrics by Howard Ashman and Tim Rice, and a book by Linda Woolverton.",
    cost: 4.25,
    date: "20 December 2023",
    time: "1:30PM AEST",
    location: "Capitol Theatre, Sydney",
    tickets: 250,
    category: "show",
  },
];
