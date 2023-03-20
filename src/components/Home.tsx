import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import Job from "../models/Job";
import { getJobsBySearchTerm } from "../services/JobsService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";

// http://localhost:3000/?search-term=lentils

const Home = () => {
  const { user, profile } = useContext(AuthContext);
  const [jobs, setJobs] = useState<Job[]>([]);

  // const [searchParams] = useSearchParams();
  // const date_posted = searchParams.get("date_posted");
  // let remote_jobs_only: boolean | null = null;
  // if (searchParams.get("remote_jobs_only") === "true") {
  //   remote_jobs_only = true;
  // } else if (searchParams.get("remote_jobs_only") === "false") {
  //   remote_jobs_only = false;
  // }
  // const employment_types = searchParams.get("employment_types");
  // const job_requirements = searchParams.get("job_requirements");
  // let radius: number | null = Number(searchParams.get("radius"));
  // if (isNaN(radius)) {
  //   radius = null;
  // }
  // const categories = searchParams.get("categories");
  // const job_titles = searchParams.get("job_titles");
  // const company_types = searchParams.get("company_types");
  // const employers = searchParams.get("employers");
  // const location = searchParams.get("location");
  // const query = searchParams.get("query");

  useEffect(() => {
    (async () => {
      if (profile) {
        const jobs: Job[] = (
          await getJobsBySearchTerm(
            profile.query,
            null,
            profile.job_is_remote,
            profile.job_employment_type,
            profile.experience_level,
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
  }, [profile]);

  return (
    <div className="Home">
      {!user && !profile && (
        <div>
          <button onClick={() => signInWithGoogle()}>Sign in!</button>
        </div>
      )}
      {user && !profile && <Form />}
      {user && profile && <CardList jobArrayProp={jobs} />}
    </div>
  );
};

export default Home;
