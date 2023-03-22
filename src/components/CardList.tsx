import { useContext, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";
import Job from "../models/Job";
import Card from "./Card";
import "./CardList.css";

interface Props {
  jobArrayProp: Job[];
}

const CardList = ({ jobArrayProp }: Props) => {
  const { addFavoriteHandler } = useContext(FavoritesContext);
  const [index, setIndex] = useState(0);

  const nah = () => {
    setIndex((prev) => prev + 1);
  };
  const yas = () => {
    setIndex((prev) => prev + 1);
    addFavoriteHandler({ job: jobArrayProp[index] });
  };
  return (
    <div className="CardList">
      <h2>Find some dough</h2>
      <Card jobProp={jobArrayProp[index]} />
      <button onClick={() => nah()}>nah</button>
      <button onClick={() => yas()}>yas</button>
    </div>
  );
};

export default CardList;
