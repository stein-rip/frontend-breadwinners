import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { addProfile } from "../services/ProfileService";
import "./Form.css";

const Form = () => {
  const { user } = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [date_posted, setDate_posted] = useState("");
  const [remote_jobs_only, setRemote_Jobs_Only] = useState(false);
  const [employment_types, setEmployment_Types] = useState("");
  const [job_requirements, setJob_Requirements] = useState("");
  const [radius, setRadius] = useState("");
  const [categories, setCategories] = useState("");
  const [job_titles, setJob_Titles] = useState("");
  const [company_types, setCompany_Types] = useState("");
  const [employers, setEmployers] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const params = {
      query,
      ...(date_posted ? { date_posted } : {}),
      ...(remote_jobs_only ? { remote_jobs_only } : {}),
      ...(employment_types ? { employment_types } : {}),
      ...(job_requirements ? { job_requirements } : {}),
      ...(radius ? { radius } : {}),
      ...(categories ? { categories } : {}),
      ...(job_titles ? { job_titles } : {}),
      ...(company_types ? { company_types } : {}),
      ...(employers ? { employers } : {}),
      ...(location ? { location } : {}),
    };
    if (user) {
      await addProfile({
        google_id: user.uid!,
        display_name: user.displayName,
        photo_url: user.photoURL,
        email: user.email,
        query,
        experience_level: job_requirements,
        job_is_remote: remote_jobs_only,
        job_employment_type: employment_types,
      });
    }

    navigate(`/`);
    setQuery("");
    setDate_posted("");
    setRemote_Jobs_Only(false);
    setEmployment_Types("");
    setJob_Requirements("");
    setRadius("");
    setCategories("");
    setJob_Titles("");
    setCompany_Types("");
    setEmployers("");
    setLocation("");
  };

  return (
    <div className="Form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Search</h2>
        <label htmlFor="query">Search</label>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <label htmlFor="datePosted">Date Posted</label>
        <input
          type="text"
          name="datePosted"
          id="datePosted"
          value={date_posted}
          onChange={(e) => setDate_posted(e.target.value)}
        />
        <label htmlFor="remoteJobsOnly">Remote</label>
        <input
          type="checkbox"
          name="remoteJobsOnly"
          id="remoteJobsOnly"
          checked={remote_jobs_only}
          onChange={(e) => setRemote_Jobs_Only(e.target.checked)}
        />
        <label htmlFor="employmentTypes">Intern</label>
        <div>
          <input
            type="checkbox"
            name="intern"
            id="intern"
            value={""}
            onChange={(e) => setEmployment_Types(e.target.value)}
          />
          <label htmlFor="employmentTypes">Full-Time</label>
          <input
            type="checkbox"
            id="full-time"
            name="full-time"
            value={""}
            onChange={(e) => setEmployment_Types(e.target.value)}
          />
          <label htmlFor="employmentTypes">Part-Time</label>

          <input
            type="checkbox"
            id="part-time"
            name="part-time"
            value={""}
            onChange={(e) => setEmployment_Types(e.target.value)}
          />
          <label htmlFor="employmentTypes">Contractor</label>
          <input
            type="checkbox"
            name="contractor"
            id="contractor"
            value={""}
            onChange={(e) => setEmployment_Types(e.target.value)}
          />
        </div>
        <label htmlFor="jobRequirements">Experience Level</label>
        <select
          name="jobRequirements"
          id="jobRequirements"
          onChange={(e) => setJob_Requirements(e.target.value)}
        >
          <option value="under_3_years_experience">Under 3 years</option>
          <option value=" more_than_3_years_experience">
            Greater than 3 years
          </option>
          <option value="no_experience">No experience</option>
          <option value="no_degree">No degree</option>
        </select>
        <button>What's baking?</button>
      </form>
    </div>
  );
};

export default Form;
