import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Job from "../models/Job";
import { getJobsBySearchTerm, getTrendingJobs } from "../services/JobsService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";

// http://localhost:3000/?search-term=lentils

const Home = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search-term");

  useEffect(() => {
    (async () => {
      if (searchTerm) {
        const jobs: Job[] = (await getJobsBySearchTerm(searchTerm)).data;
        setJobs(jobs);
      } else {
        const jobs: Job[] = (await getTrendingJobs()).data;
        setJobs(jobs);
      }
    })();
  }, [searchTerm]);

  return (
    <div className="Home">
      <Form />
      <CardList jobArrayProp={jobs} />
    </div>
  );
};

export default Home;
