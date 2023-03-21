import axios from "axios";
import MultipleJobResponse from "../models/MultipleJobResponse";
import SingleJobResponse from "../models/SingleJobResponse";

const baseURL: string = "https://jsearch.p.rapidapi.com";
const key: string = process.env.REACT_APP_JSEARCH_KEY || "";

export const getJobsBySearchTerm = async (
  query: string,
  date_posted: any | null,
  remote_jobs_only: boolean | null,
  employment_types: string | null,
  job_requirements: string | null
): Promise<MultipleJobResponse> => {
  const params = {
    query,
    ...(date_posted ? { date_posted } : {}),
    ...(remote_jobs_only ? { remote_jobs_only } : {}),
    ...(employment_types ? { employment_types } : {}),
    ...(job_requirements ? { job_requirements } : {}),
  };

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
