import { useEffect, useState } from "react";
import Job from "../models/Job";
import { getJobById } from "../services/JobsService";
import "./Details.css";
import { useParams } from "react-router-dom";

// http://localhost:3000/jobs/0g9WUnfaU9EoxTVK4N

const Details = () => {
  const [job, setJob] = useState<Job | null>(null);
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const JobFromJSearch: Job = (await getJobById(id!)).data;
      setJob(JobFromJSearch);
    })();
  }, []);

  return (
    <div className="Details">
      <h2>{job?.title}</h2>
      <img src={job?.images.original.url} alt={job?.title} />
    </div>
  );
};

export default Details;
