export default interface Profile {
  _id?: string;
  google_id: string;
  display_name: string | null;
  photo_url: string | null;
  email: string | null;
  query: string;
  date_posted: string | null;
  experience_level: string;
  job_is_remote: boolean;
  job_employment_type: string;
}
