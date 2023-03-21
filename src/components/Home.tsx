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

  useEffect(() => {
    (async () => {
      if (profile) {
        const jobs: Job[] = (
          await getJobsBySearchTerm(
            profile.query,
            profile.date_posted,
            profile.job_is_remote,
            profile.job_employment_type,
            profile.experience_level
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
