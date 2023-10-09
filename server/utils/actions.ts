"use server";
import db from "./db";

type Occasion = {
  name: string;
  description: string;
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
  const { name, description, date, time, location, max_tickets } = occasion;
  const addOccasion = await db.events.create({
    data: {
      name,
      description,
      date,
      time,
      location,
      max_tickets,
    },
  });
};

export const createTicket = async (ticket: Ticket) => {
  const { user_id, event_id, ticket_code, purchase_date, seat_number } = ticket;
  const addTicket = await db.ticket.create({
    data: {
      user_id,
      event_id,
      ticket_code,
      seat_number,
    },
  });
};
