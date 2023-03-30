import "./Greetings.css";
import ToastFace from "../assets/ToastFace.png";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import BreadwinnersToast from "../assets/ToastFace.png";

const Greetings = () => {
  const { user, profile } = useContext(AuthContext);
  return (
    <div className="Greetings">
      <div className="Toast">
        <img
          className="BreadwinnersToast"
          src={BreadwinnersToast}
          alt="BreadwinnersToast"
        />
        <div className="Intro">
          {/* <img className="ToastFaceImg" src={ToastFace} alt="Toast" /> */}
          <h1>
            Hi! {profile?.display_name}!{" "}
            <img
              className="UserImg"
              src={user?.photoURL!}
              // alt={`profile picture for: ${user?.displayName}`}
            />
          </h1>
          {/* new */}
          <br />
          <p>
            Welcome to Breadwinners! Get a bread start and fill out your
            profile. You can update this anytime during your search. While
            viewing our breadwinning jobs, swipe right on jobs you knead to save
            for later. Swipe left on crumby jobs to see the next. Don't let your
            bread get stale! Monitor the job expiration dates so you can apply
            in time.
          </p>
          <br />
          {/* <h2>Let's get this bread!</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Greetings;

// dough rising (waiting gif)-->cardlist
// jobs you knead-->favorite
// i can dough better/this job is crumby (delete button)
// i dont want naan of that-->delete
// stale bread-->expiration
// preheating-->loading

// bready, set go!
// rake in the dough
// jobs you loaf
// breadwinning jobs
// get a bread start
// in the oven
// burnt toast
// adjust filter in heel of bread-->put form on last card in rotation
