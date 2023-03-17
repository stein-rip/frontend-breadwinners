import { useEffect, useState } from "react";
import Job from "../models/Job";
import { getJobById } from "../services/JobsService";
import "./Details.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// http://localhost:3000/jobs/0g9WUnfaU9EoxTVK4N

const Details = () => {
  const [jobs, setJob] = useState<Job | null>(null);
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const JobFromJSearch: Job = (await getJobById(id!)).data;
      setJob(JobFromJSearch);
    })();
  }, []);

  return (
    <div className="Details">
      <h2>{jobs?.job_title}</h2>
      <h2>{jobs?.employer_website}</h2> <h2>{jobs?.employer_name}</h2>
      <img src={jobs?.employer_logo} alt={jobs?.job_title} />
      <h3>{jobs?.employer_company_type}</h3>
      <h3>{jobs?.job_is_remote}</h3>
      <h3>{jobs?.job_employment_type}</h3>
      <h3>{`${jobs?.job_city}, ${jobs?.job_state}`}</h3>
      <h3>{jobs?.job_posted_at_datetime_utc}</h3>
      <h3>{jobs?.job_offer_expiration_timestamp}</h3>
      <h3>{jobs?.job_description}</h3>
      <h3>{jobs?.job_highlights.Qualifications}</h3>
      <h3>{jobs?.job_highlights.Responsibilities}</h3>
      <h3>{jobs?.job_highlights.Benefits}</h3>
      <h3>{jobs?.job_required_skills}</h3>
      <h3>{jobs?.job_required_education.associates_degree}</h3>
      <h3>{jobs?.job_required_education.bachelors_degree}</h3>
      <h3>{jobs?.job_required_education.degree_mentioned}</h3>
      <h3>{jobs?.job_required_education.degree_preferred}</h3>
      <h3>{jobs?.job_required_education.high_school}</h3>
      <h3>{jobs?.job_required_education.postgraduate_degree}</h3>
      <h3>{jobs?.job_required_education.professional_certification}</h3>
      <h3>
        {jobs?.job_required_education.professional_certification_mentioned}
      </h3>
      <h3>{jobs?.job_required_experience.experience_mentioned}</h3>
      <h3>{jobs?.job_required_experience.experience_preferred}</h3>
      <h3>{jobs?.job_required_experience.no_experience_required}</h3>
      <h3>{jobs?.job_required_experience.required_experience_in_months}</h3>
      <button>Apply{jobs?.job_apply_link}</button>
    </div>
  );
};

// maybe we want store search params

export default Details;
