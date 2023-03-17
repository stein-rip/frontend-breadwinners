import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Job from "../models/Job";
import { getJobById, getJobsBySearchTerm } from "../services/JobsService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";

// http://localhost:3000/?search-term=lentils

const Home = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchParams] = useSearchParams();
  const date_posted = searchParams.get("date_posted");
  let remote_jobs_only: boolean | null = null;
  if (searchParams.get("remote_jobs_only") === "true") {
    return true;
  } else if (searchParams.get("remote_jobs_only") === "false") {
    return false;
  }
  const employment_types = searchParams.get("employment_types");
  const job_requirements = searchParams.get("job_requirements");
  let radius: number | null = Number(searchParams.get("radius"));
  if (isNaN(radius)) {
    radius = null;
  }
  const categories = searchParams.get("categories");
  const job_titles = searchParams.get("job_titles");
  const company_types = searchParams.get("company_types");
  const employers = searchParams.get("employers");
  const location = searchParams.get("location");

  useEffect(() => {
    (async () => {
      if (
        date_posted ||
        remote_jobs_only ||
        employment_types ||
        job_requirements ||
        radius ||
        categories ||
        job_titles ||
        company_types ||
        employers ||
        location
      ) {
        const jobs: Job[] = (
          await getJobsBySearchTerm(
            date_posted,
            remote_jobs_only,
            employment_types,
            job_requirements,
            radius,
            categories,
            job_titles,
            company_types,
            employers,
            location
          )
        ).data;
        setJobs(jobs);
      } else {
        const jobs: Job[] = (
          await getJobsBySearchTerm(
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          )
        ).data;
        setJobs(jobs);
      }
    })();
  }, [
    date_posted,
    remote_jobs_only,
    employment_types,
    job_requirements,
    radius,
    categories,
    job_titles,
    company_types,
    employers,
    location,
  ]);

  return (
    <div className="Home">
      <Form />
      <CardList jobArrayProp={jobs} />
    </div>
  );
};

export default Home;
