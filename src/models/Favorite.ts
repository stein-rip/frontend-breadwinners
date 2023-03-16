import Job from "./Job";

export default interface Favorite {
  _id?: string;
  job: Job;
  userId?: string;
}
