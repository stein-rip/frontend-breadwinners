import axios from "axios";
import MultipleJobResponse from "../models/MultipleJobResponse";
import SingleJobResponse from "../models/SingleJobResponse";

const baseURL: string = "https://jsearch.p.rapidapi.com";
const key: string = process.env.REACT_APP_JSEARCH_KEY || "";

// export const getJobs = async (): Promise<MultipleJobResponse> => {
//   return (await axios.get(baseURL, { params: { X-RapidAPI-Key: key } }))
//     .data;
// };

export const getJobsBySearchTerm = async (
  // date_posted: enum
  query: string,
  date_posted: any | null,
  remote_jobs_only: boolean | null,
  employment_types: string | null,
  job_requirements: string | null,
  radius: number | null,
  categories: string | null,
  job_titles: string | null,
  company_types: string | null,
  employers: string | null,
  location: string | null
): Promise<MultipleJobResponse> => {
  const params = {
    query,
    ...(date_posted ? { date_posted } : {}),
    ...(remote_jobs_only ? { remote_jobs_only } : {}),
    ...(employment_types ? { employment_types } : {}),
    ...(job_requirements ? { job_requirements } : {}),
    ...(radius ? { radius } : {}),
    ...(categories ? { categories } : {}),
    ...(job_titles ? { job_titles } : {}),
    ...(company_types ? { company_types } : {}),
    ...(employers ? { employers } : {}),
    ...(location ? { location } : {}),
  };

  // /search-filters'
  // (location ? {string} : {}),

  return (
    await axios.get(baseURL + "/search", {
      params,
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    })
  ).data;
};

export const getJobById = async (
  job_id: string
): Promise<SingleJobResponse> => {
  return (
    await axios.get(baseURL + "/job-details" + encodeURIComponent(job_id), {
      params: { query: job_id },
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    })
  ).data;
};
