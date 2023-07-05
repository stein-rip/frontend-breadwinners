import React, { useState, useMemo, useRef, useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import Job from "../models/Job";
import Card from "./Card";
import TinderCard from "react-tinder-card";
import "./CardList.css";
import Favorite from "../models/Favorite";
import Greetings from "./Greetings";
import ClickSaved from "../assets/ClickSaved.png";
interface Props {
	jobArrayProp: Job[];
}
const CardList = ({ jobArrayProp }: Props) => {
	const [lastDirection, setLastDirection] = useState();
	const { addFavoriteHandler } = useContext(FavoritesContext);
	const swiped = (direction: any, nameToDelete: any, job: Favorite) => {
		console.log("removing: " + nameToDelete);
		setLastDirection(direction);
		if (direction === "right") {
			addFavoriteHandler(job);
		}
	};
	const outOfFrame = (name: any) => {
		console.log(name + " left the screen!");
	};

	const [trigger, setTrigger] = useState(false);
	setTimeout(() => {
		setTrigger(true);
	}, 1200);

	return (
		<div className="CardList">
			<div className="Greetings">
				<img
					className="Breadwinners Mascot BreadBase"
					src={ClickSaved}
					alt="Breadwinners Mascot"
				/>
				);
			</div>
			<ul>
				<div className="cardContainer">
					{!trigger && <Greetings />}
					{jobArrayProp.map((job) => (
						<TinderCard
							className="swipe BreadBase"
							key={job.job_id}
							onSwipe={(dir) => swiped(dir, job.job_id, { job })}
							onCardLeftScreen={() => outOfFrame(job.job_title)}>
							<Card jobProp={job} fromFav={false} />
						</TinderCard>
					))}
				</div>
			</ul>
		</div>
	);
};
export default CardList;
