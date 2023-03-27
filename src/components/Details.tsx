import { useEffect, useState } from "react";
import Job from "../models/Job";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { getJobById } from "../services/JobsService";

// http://localhost:3000/jobs/0g9WUnfaU9EoxTVK4N

const Details = () => {
  const [jobs, setJob] = useState<Job | null>(null);
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const jobFromJSearch: Job = (await getJobById(id!)).data[0];
      console.log(jobFromJSearch);
      setJob(jobFromJSearch);
    })();
  }, [id]);

  return (
    <div className="Details">
      <h1>more details</h1>
      <div className="Toast">
        <h2>{jobs?.job_title}</h2>
        <img src={jobs?.employer_logo} alt={jobs?.job_title} />
        <p>{jobs?.employer_website}</p> <h2>{jobs?.employer_name}</h2>
        <h3>{jobs?.employer_company_type}</h3>
        <h3>{jobs?.job_is_remote}</h3>
        <h3>{jobs?.job_employment_type}</h3>
        <h3>
          {" "}
          {jobs?.job_city} {jobs?.job_state}
        </h3>
        <h3>Job Description</h3>
        <p>{jobs?.job_description}</p>
        <h3>Job Responsibilities</h3>
        <p>{jobs?.job_highlights.Responsibilities}</p>
        <h3>Job Benefits</h3>
        <p>{jobs?.job_highlights.Benefits}</p>
        {/* <h3>Job Skills</h3>
      <p>{jobs?.job_required_skills}</p>
      <h3>{jobs?.job_required_education.associates_degree}</h3>
      <h3>{jobs?.job_required_education.bachelors_degree}</h3>
      <h3>{jobs?.job_required_education.degree_mentioned}</h3>
      <h3>{jobs?.job_required_education.degree_preferred}</h3>
      <h3>{jobs?.job_required_education.high_school}</h3>
      <h3>{jobs?.job_required_education.postgraduate_degree}</h3>
      <h3>{jobs?.job_required_education.professional_certification}</h3> */}
        {/* <h3>
        {jobs?.job_required_education.professional_certification_mentioned}
      </h3>
      <h3>{jobs?.job_required_experience.experience_mentioned}</h3>
      <h3>{jobs?.job_required_experience.experience_preferred}</h3>
      <h3>{jobs?.job_required_experience.no_experience_required}</h3>
      <h3>{jobs?.job_required_experience.required_experience_in_months}</h3> */}
        <a href={`${jobs?.job_apply_link}`} target="_blank">
          Apply
        </a>
      </div>
    </div>
  );
};

// maybe we want store search params

export default Details;
