import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Job from "../models/Job";
import { getJobsBySearchTerm } from "../services/JobsService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";
import ToastMascot from "../assets/ToastMascot.png";

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
				<img
					className="Breadwinners Mascot BreadBase"
					src={ToastMascot}
					alt="Breadwinners Mascot"
				/>
			)}
			{user && !profile && <Form />}
			{user && profile && <CardList jobArrayProp={jobs} />}
		</div>
	);
};

export default Home;
