import Job from "./Job";

export default interface Favorite {
  _id?: string;
  job: Job;
  profile_id?: string;
}
