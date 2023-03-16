import Job from "../models/Job";
import Card from "./Card";
import "./CardList.css";

interface Props {
  jobArrayProp: Job[];
}

const CardList = ({ jobArrayProp }: Props) => {
  return (
    <div className="CardList">
      <h2>Results</h2>
      <ul>
        {jobArrayProp.map((item) => (
          <Card jobProp={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
