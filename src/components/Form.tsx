import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";

const Form = () => {
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

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const params = {
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

    navigate(`/?${new URLSearchParams(params as any)}`);
    setDate_posted("");
    setRemote_Jobs_Only(true);
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
        <label htmlFor="datePosted">Date</label>
        <input
          type="date"
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

        {/* <label htmlFor="education">Choose your highest Education:</label>
          <select name="education" id="education">
            <option value="high-school">High School</option>
            <option value="associate-degree">Associate Degree</option>
            <option value="bachelor-degree">Bachelor Degree</option>
            <option value="master-degree">Master Degree</option>
            <option value="phd">PhD</option>
          </select> */}

        <label htmlFor="jobRequirements">Choose your highest Education:</label>
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
        <label htmlFor="datePosted"></label>
        <input
          type="text"
          name="jobTitles"
          id="jobTitles"
          value={job_titles}
          onChange={(e) => setJob_Titles(e.target.value)}
        />

        <button>What's baking?</button>
      </form>
    </div>
  );
};

export default Form;
