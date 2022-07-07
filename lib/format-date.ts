import { format } from "date-fns";

export const toDate = (date: string): string => {
  const dateObj = new Date(date);
  const formattedDate = format(dateObj, "MMMM d, yyyy");
  return formattedDate;
};
