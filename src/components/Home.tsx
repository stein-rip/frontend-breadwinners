import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle } from "../firebaseConfig";
import Job from "../models/Job";
import { getJobsBySearchTerm } from "../services/JobsService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";
import ToastMascot from "../assets/ToastMascot.png";

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
    <div className="Toast Home">
      {!user && !profile && (
        <img
          className="Breadwinners Mascot"
          src={ToastMascot}
          alt="Breadwinners Mascot"
        />
      )}
      {user && !profile && <Form />}
      {user && profile && <CardList jobArrayProp={jobs} />}
    </div>
  );
};

// dough rising (waiting gif)-->cardlist
// jobs you knead-->favorite
// i can dough better/this job is crumby (delete button)
// i dont want naan of that-->delete
// stale bread-->expiration
// preheating-->loading

// bready, set go!
// rake in the dough
// jobs you loaf
// breadwinning jobs
// get a bread start
// in the oven
// burnt toast
// adjust filter in heel of bread-->put form on last card in rotation

export default Home;
