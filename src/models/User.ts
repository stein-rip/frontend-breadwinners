export default interface User {
  _id?: string;
  displayName: string;
  photoURL: string;
  email: string;
  job_is_remote: boolean;
  job_employment_type: string;
  job_city: null | string;
  job_state: null | string;
  job_country: null | string;
}
