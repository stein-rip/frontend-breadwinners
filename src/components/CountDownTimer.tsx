import { useCountdown } from "../hooks/useCountDown";
import Job from "../models/Job";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Oh no, stale bread!</span>
      <p>This job has expired</p>
    </div>
  );
};
const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter">
      <p>job will expire in:</p>
      {`${days}d`}:{`${hours}h`}:{`${minutes}m`}:{`${seconds}s`}
    </div>
  );
};
interface Props {
  jobProp: Job;
}
const CountdownTimer = ({ jobProp }: Props) => {
  let targetDate = new Date(
    jobProp.job_offer_expiration_datetime_utc
  ).getTime();
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountdownTimer;
