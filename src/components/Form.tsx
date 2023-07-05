import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Form.css";

import BreadwinnersToast from "../assets/ToastFace.png";

const Form = () => {
	const { user, profile, addProfileHandler } = useContext(AuthContext);
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
		<div className="Form ">
			<img
				className="BreadwinnersToast BreadBase"
				src={BreadwinnersToast}
				alt="Breadwinners Toast"
			/>
			{/* <h5>Welcome! Your dough is on the way.</h5> */}
			<div className="Toast FormContainer">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="Selections">
						<p>Type a job title, location, or both!</p>
						<div className="search">
							<label htmlFor="query"></label>
							<input
								type="text"
								name="query"
								id="query"
								placeholder="Enter job title and/or state..."
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								required
							/>
						</div>
						<div className="Remote">
							<label htmlFor="remoteJobsOnly">Remote only?</label>
							<input
								type="checkbox"
								name="remoteJobsOnly"
								id="remoteJobsOnly"
								checked={remote_jobs_only}
								onChange={(e) => setRemote_Jobs_Only(e.target.checked)}
							/>
						</div>
						<div className="DatePosted">
							<label htmlFor="datePosted"></label>
							<select
								name="datePosted"
								id="datePosted"
								value={date_posted}
								onChange={(e) => setDate_posted(e.target.value)}>
								<option value="all">Filter by posting date</option>
								<option value="all">All posts</option>
								<option value="today">Today</option>
								<option value="3days">Past 72 Hours</option>
								<option value="week">Past Week</option>
								<option value="month">Past Month</option>
							</select>
						</div>
						<div className="Type">
							<label htmlFor="type"></label>
							<select
								name="type"
								id="type"
								value={employment_types}
								onChange={(e) => setEmployment_Types(e.target.value)}>
								<option value="">Filter by employment type</option>
								<option value="INTERN">Intern</option>
								<option value="FULLTIME">Full Time</option>
								<option value="PARTTIME">Part-Time</option>
								<option value="CONTRACTOR">Contractor</option>
							</select>
							<label htmlFor="jobRequirements"></label>
							<select
								name="jobRequirements"
								id="jobRequirements"
								value={job_requirements}
								onChange={(e) => setJob_Requirements(e.target.value)}>
								<option value="">Filter by experience level</option>
								<option value="under_3_years_experience">Under 3 years</option>
								<option value=" more_than_3_years_experience">
									Greater than 3 years
								</option>
								<option value="no_experience">No experience</option>
								<option value="no_degree">No degree</option>
							</select>
						</div>
					</div>
					<div className="remote-container">
						<p>
							Swipe results left to discard, or right to save. You got this,
							{user?.displayName}!
						</p>
						<button>Get that bread!</button>
					</div>
				</form>
			</div>

			{/* <Greetings /> */}
		</div>
	);
};

export default Form;
