import axios from "axios";
import MultipleJobResponse from "../models/MultipleJobResponse";
import SingleJobResponse from "../models/SingleJobResponse";

const baseURL: string = "https://api.giphy.com/v1/jobs";
const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getTrendingJobs = async (): Promise<MultipleJobResponse> => {
  return (await axios.get(baseURL + "/trending", { params: { api_key: key } }))
    .data;
};

export const getJobsBySearchTerm = async (
  searchTerm: string
): Promise<MultipleJobResponse> => {
  return (
    await axios.get(baseURL + "/search", {
      params: { api_key: key, q: searchTerm },
    })
  ).data;
};

export const getJobById = async (id: string): Promise<SingleJobResponse> => {
  return (
    await axios.get(baseURL + "/" + encodeURIComponent(id), {
      params: { api_key: key },
    })
  ).data;
};
