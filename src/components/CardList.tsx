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
      <Card jobProp={jobArrayProp[index]} fromFav={false} />
      <div className="Buttons">
        <button className="Nah" onClick={() => nah()}>
          nah
        </button>
        <button className="Yas" onClick={() => yas()}>
          yas
        </button>
      </div>
    </div>
  );
};

export default CardList;
