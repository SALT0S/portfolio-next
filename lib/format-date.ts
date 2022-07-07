import moment from "moment";

export const toDate = (date: string): string => {
  return moment(date).format("MMMM Do YYYY");
};
