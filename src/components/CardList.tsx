import React, { useState, useMemo, useRef, useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import Job from "../models/Job";
import Card from "./Card";
import TinderCard from "react-tinder-card";
import "./CardList.css";
import Favorite from "../models/Favorite";
import Greetings from "./Greetings";
interface Props {
  jobArrayProp: Job[];
}
const CardList = ({ jobArrayProp }: Props) => {
  const [lastDirection, setLastDirection] = useState();
  const { addFavoriteHandler } = useContext(FavoritesContext);
  const db = jobArrayProp;
  const jobs = db;
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
  return (
    <div className="CardList">
      <h1 className="CardTitle">Available jobs</h1>
      {/* <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
       */}
      <ul>
        <div className="cardContainer">
          <Greetings />
          {jobs.map((job) => (
            <TinderCard
              className="swipe"
              key={job.job_id}
              onSwipe={(dir) => swiped(dir, job.job_id, { job })}
              onCardLeftScreen={() => outOfFrame(job.job_title)}
            >
              <Card jobProp={job} fromFav={false} />
            </TinderCard>
          ))}
        </div>
      </ul>
    </div>
  );
};
export default CardList;
