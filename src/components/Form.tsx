import "./Form.css";
const SearchForm = () => {
    const navigate = useNavigate();


    const submitHandler = (e: FormEvent): void => {
      e.preventDefault();
      navigate(`/?${new URLSearchParams({ term })}`);
    };


   …
   }


const Form = () => {
  return <div className="Form">Form works</div>;
};

export default Form;
