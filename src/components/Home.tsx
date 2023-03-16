import "./Home.css";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();
  const term = searchParams.get("term");
  return <div className="Home">Home works</div>;
};

export default Home;
