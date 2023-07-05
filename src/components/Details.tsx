import { useEffect, useState } from "react";
import Job from "../models/Job";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
import { getJobById } from "../services/JobsService";
import ToastDetails from "../assets/ToastDetails.png";
import BreadwinnersToast from "../assets/ToastFace.png";

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
			<div className="Toast">
				<img className="ToastDetailsImg" src={ToastDetails} alt="Toast" />
				<div className="ToastDetails BreadBase">
					<h2> {jobs?.job_title} </h2>
					<h3>{jobs?.job_employment_type}</h3>
					<h3>
						{jobs?.job_city} {jobs?.job_state}
					</h3>
					<h3>Job Description:</h3>
					<p>{jobs?.job_description}</p>

					<h3>Job Responsibilities</h3>
					<p>{jobs?.job_highlights.Responsibilities}</p>
					<h3>Job Benefits?</h3>
					<p>{jobs?.job_highlights.Benefits}</p>
				</div>
				<a href={`${jobs?.job_apply_link}`} target="_blank">
					Apply Here
				</a>
			</div>
		</div>
	);
};

// maybe we want store search params

export default Details;
