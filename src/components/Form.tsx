import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // http://localhost:3000/?search-term=lentils
    navigate(`/?${new URLSearchParams({ "search-term": searchTerm })}`);
    setSearchTerm("");
  };

  return (
    <form className="Form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="searchTerm">Search Term</label>
      <input
        type="text"
        name="searchTerm"
        id="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
