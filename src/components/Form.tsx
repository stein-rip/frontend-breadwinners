import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Form.css";

const Form = () => {
  const { user, profile, addProfileHandler } = useContext(AuthContext);
  console.log(profile);
  const [query, setQuery] = useState(profile?.query || "");
  const [date_posted, setDate_posted] = useState(profile?.date_posted || "all");
  const [remote_jobs_only, setRemote_Jobs_Only] = useState(
    profile?.job_is_remote || false
  );
  const [employment_types, setEmployment_Types] = useState(
    profile?.job_employment_type || ""
  );
  const [job_requirements, setJob_Requirements] = useState(
    profile?.experience_level || ""
  );

  useEffect(() => {
    if (profile) {
      setQuery(profile.query);
      setDate_posted(profile.date_posted || "");
      setRemote_Jobs_Only(profile.job_is_remote);
      setEmployment_Types(profile.job_employment_type || "");
      setJob_Requirements(profile.experience_level || "");
    }
  }, [profile]);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (user) {
      await addProfileHandler({
        google_id: user.uid!,
        display_name: user.displayName,
        photo_url: user.photoURL,
        email: user.email,
        query,
        date_posted: date_posted,
        experience_level: job_requirements,
        job_is_remote: remote_jobs_only,
        job_employment_type: employment_types,
      });
    }
    navigate(`/`);
  };

  return (
    <div className="Form">
      <h1>form</h1>
      <div className="Toast FormContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="query">Search:</label>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="job title, location, etc"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <div className="DatePosted">
            <label htmlFor="datePosted">Date Posted</label>

            <select
              name="datePosted"
              id="datePosted"
              value={date_posted}
              onChange={(e) => setDate_posted(e.target.value)}
            >
              <option value="all">All</option>
              <option value="today">Today</option>
              <option value="3days">Past 72 Hours</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
            </select>
          </div>
          <div className="Remote">
            <label htmlFor="remoteJobsOnly">Remote:</label>
            <input
              type="checkbox"
              name="remoteJobsOnly"
              id="remoteJobsOnly"
              checked={remote_jobs_only}
              onChange={(e) => setRemote_Jobs_Only(e.target.checked)}
            />
          </div>
          <div className="Type">
            <p>Type:</p>
            <input
              type="checkbox"
              name="intern"
              id="intern"
              value="INTERN"
              checked={employment_types === "INTERN"}
              onChange={(e) => setEmployment_Types(e.target.value)}
            />
            <label htmlFor="intern">Intern</label>
            <br />
            <input
              type="checkbox"
              id="full-time"
              name="full-time"
              value="FULLTIME"
              checked={employment_types === "FULLTIME"}
              onChange={(e) => setEmployment_Types(e.target.value)}
            />
            <label htmlFor="full-time">Full-Time</label>
            <br />
            <input
              type="checkbox"
              id="part-time"
              name="part-time"
              value="PARTTIME"
              checked={employment_types === "PARTTIME"}
              onChange={(e) => setEmployment_Types(e.target.value)}
            />
            <label htmlFor="part-time">Part-Time</label>
            <br />
            <input
              type="checkbox"
              name="contractor"
              id="contractor"
              value="CONTRACTOR"
              checked={employment_types === "CONTRACTOR"}
              onChange={(e) => setEmployment_Types(e.target.value)}
            />
            <label htmlFor="contractor">Contractor</label>
            <br />
            <label htmlFor="jobRequirements">Experience Level</label>
            <select
              name="jobRequirements"
              id="jobRequirements"
              value={job_requirements}
              onChange={(e) => setJob_Requirements(e.target.value)}
            >
              <option value="under_3_years_experience">Under 3 years</option>
              <option value=" more_than_3_years_experience">
                Greater than 3 years
              </option>
              <option value="no_experience">No experience</option>
              <option value="no_degree">No degree</option>
            </select>
          </div>
          <button>What's baking?</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
