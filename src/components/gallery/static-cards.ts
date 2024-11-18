import moment from "moment";
import { TrickCardProps } from "./trick-card";

export const cards: TrickCardProps[] = [
  {
    img: "/imgs/one.jpeg",
    trick: "chinstand",
    date: moment("2023-10-28").toDate(),
    notes: "First practtice after two weeks off, got fired that day",
    id: "1",
  },
];
