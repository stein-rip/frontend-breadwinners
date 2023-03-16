import "./Details.css";
import { useParams } from "react-router-dom";

const Details = () => {
  //   const SingleGif = () => {
  //     const id = useParams().id;
  //   };

  const id = useParams().id;

  return <div className="Details">Details works</div>;
};

export default Details;
